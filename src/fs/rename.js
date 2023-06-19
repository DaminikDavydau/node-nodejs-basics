// rename.js - implement function that renames file wrongFilename.txt 
// to properFilename with extension .md (if there's no file wrongFilename.txt or 
// properFilename.md already exists Error with message FS operation failed must be thrown)

import * as fs from 'fs'

const rename = async () => {
    const currentFileName = './src/fs/files/wrongFilename.txt';
    const newFileName = './src/fs/files/properFilename.md';

    try {
        if (!fs.existsSync(currentFileName) || fs.existsSync(newFileName)) {
            throw 'FS operation failed';
        }
        
        fs.renameSync(currentFileName, newFileName);
        
    } catch (error) {
        console.error(new Error(error))
    }
};

await rename();

// npm run fs:rename