import * as fs from 'fs';

const read = async () => {
    const filePath = './src/streams/files/fileToRead.txt';

  const readableStream = fs.createReadStream(filePath);

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on('error', (error) => {
    console.error('FS operation failed:', error);
  });
};

await read();

//npm run streams:read