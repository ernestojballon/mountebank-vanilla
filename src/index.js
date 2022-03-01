import { create } from 'mountebank';
import { port } from './settings.js';
import addService from './hello-service.js';
import addService2 from './service2.js';

const mbServerInstance = create({
        port: port,
        pidfile: '../mb.pid',
        logfile: '../mb.log',
        protofile: '../protofile.json',
        ipWhitelist: ['*'],
        log:{
          "level": "info",
          "transports": {
            "console": {
              "colorize": true,
              "format": "%level-mb: %message"
            },
            "file": {
              "path": "mb.log",
              "format": "json"
            }
          }
        }
    });

mbServerInstance.then(function() {
      addService();
      addService2();
});