import * as fs from 'fs';

const write = async () => {
    const filePath = './src/streams/files/fileToWrite.txt';

  const writableStream = fs.createWriteStream(filePath);

  process.stdin.pipe(writableStream);

  writableStream.on('finish', () => {
    console.log(`Data written to ${filePath}`);
  });

  writableStream.on('error', (error) => {
    console.error('FS operation failed:', error);
  });
};

await write();

//npm run streams:write