import mbHelper from './mountebank-helper.js';
import { service2_port } from './settings.js';


function addService2() {
    const response = ({ message: "hello world", token: "12345" })

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
        port: service2_port,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

export default addService2;