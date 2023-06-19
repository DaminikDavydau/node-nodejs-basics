import * as fs from 'fs';
import * as zlib from 'zlib';

const compress = async () => {
    const inputFile = './src/zip/files/fileToCompress.txt';
    const outputFile = './src/zip/files/archive.gz';

    const readStream = fs.createReadStream(inputFile);
    const writeStream = fs.createWriteStream(outputFile);
    const gzipStream = zlib.createGzip();

    readStream.pipe(gzipStream).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File ${inputFile} compressed to ${outputFile}`);
    });
};

await compress();

// npm run zip:compress