// copy.js - implement function that copies folder 'files' files with all its content 
// into folder files_copy at the same level (if files folder doesn't exists or files_copy 
// has already been created Error with message FS operation failed must be thrown)

import { existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join } from "path";

const copy = async () => {
    const currPath = './src/fs/files'
    const newPath = './src/fs/files_copy'
    try {
        if (!existsSync(currPath) || existsSync(newPath)) {
            throw 'FS operation failed';
        }

        mkdirSync(newPath)
        const files = readdirSync(currPath);

        files.forEach((file) => {
            const currFilePath = join(currPath, file);
            const newFilePath = join(newPath, file);
            copyFileSync(currFilePath, newFilePath);
        });
        
    } catch (error) {
        console.error(new Error(error))
    }
};

await copy();

// npm run fs:copy