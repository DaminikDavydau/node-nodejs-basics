import * as fs from 'fs';
import * as zlib from 'zlib';

const decompress = async () => {
    const inputFile = './src/zip/files/archive.gz';
    const outputFile = './src/zip/files/fileToCompress.txt';

    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const gunzipStream = zlib.createGunzip();

    readStream.pipe(gunzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File ${inputFile} decompressed to ${outputFile}`);
    });
};

await decompress();

// npm run zip:decompress