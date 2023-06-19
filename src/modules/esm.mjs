import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import fs from 'fs';

import './files/c.js';
//import a from './files/a.json'
//import b from './files/b.json'

const random = Math.random();


let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(fs.readFileSync('./src/modules/files/a.json', 'utf8'));
} else {
    unknownObject = JSON.parse(fs.readFileSync('./src/modules/files/b.json', 'utf8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

// npm run modules