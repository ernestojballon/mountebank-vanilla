import fetch from 'node-fetch';
import { port } from './settings.js';

function postImposter(body) {
    const url = `http://127.0.0.1:${port}/imposters`;

    return fetch(url, {
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
}

export default { postImposter };