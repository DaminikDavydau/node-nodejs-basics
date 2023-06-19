// create.js - implement function that creates new file fresh.txt with content 'I am fresh and young' 
// inside of the files folder (if file already exists Error with message FS operation failed must be thrown)

import { writeFileSync, existsSync } from 'fs';

const create = async () => {
    const path = './src/fs/files/fresh.txt'
    try {
        if (existsSync(path)) {
            throw 'FS operation failed';
        }
        
        writeFileSync(path, 'I am fresh and young');
        
    } catch (error) {
        console.error(new Error(error))
    }
};

await create();

// npm run fs:create