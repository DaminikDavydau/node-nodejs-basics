import * as crypto from 'crypto';
import * as fs from 'fs';

const calculateHash = async () => {
    const filePath = './src/hash/files/fileToCalculateHashFor.txt';

    try {
        const data = fs.readFileSync(filePath);
        console.log(crypto.createHash('sha256').update(data).digest('hex'));
    } catch (error) {
        console.error(new Error('FS operation failed'))
    }
};

await calculateHash();

// npm run hash