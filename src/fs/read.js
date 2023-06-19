// read.js - implement function that prints content of the fileToRead.txt into console 
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import * as fs from 'fs'

const read = async () => {
    const fileName = './src/fs/files/fileToRead.txt';

    if (!fs.existsSync(fileName)) {
        throw new Error('FS operation failed');
    }

    const content = fs.readFileSync(fileName, 'utf-8');
    console.log(content); 
};

await read();

// npm run fs:read