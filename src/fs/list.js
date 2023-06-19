// list.js - implement function that prints all array of filenames 
// from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

import * as fs from 'fs'

const list = async () => {
    const folderPath = './src/fs/files/';

    if (!fs.existsSync(folderPath)) {
        throw new Error('FS operation failed');
    }

    const files = fs.readdirSync(folderPath);
    console.log(files);
};

await list();

// npm run fs:list 