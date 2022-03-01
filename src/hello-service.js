import mbHelper from './mountebank-helper.js';
import { hello_service_port } from './settings.js';


function addService() {
    const response = { message: "hello world" }

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(response)
                    }
                }
            ]
        }
    ];

    const imposter = {
        port: hello_service_port,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

export default addService;