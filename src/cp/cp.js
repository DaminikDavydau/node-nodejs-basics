import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['./src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
      });
    
      process.stdin.pipe(childProcess.stdin);
    
      childProcess.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
      });
  };
  
  // Example usage:
  spawnChildProcess(['arg1', 'arg2']);
  