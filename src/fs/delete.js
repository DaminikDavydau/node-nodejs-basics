// delete.js - implement function that deletes file fileToRemove.txt 
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

import * as fs from 'fs'

const remove = async () => {
    const fileName = './src/fs/files/fileToRemove.txt';

    try {
        if (!fs.existsSync(fileName)) {
            throw 'FS operation failed';
        }
        
        fs.unlinkSync(fileName);
        
    } catch (error) {
        console.error(new Error(error))
    }
};

await remove();

// npm run fs:delete