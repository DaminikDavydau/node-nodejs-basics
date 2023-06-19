import { Worker } from "worker_threads";
import * as os from "os";

const performCalculations = async () => {
    const numWorkers = os.cpus().length;
    const workers = [];
  
    const results = [];
  
    const createWorker = (n) => {
      return new Promise((resolve) => {
        const worker = new Worker('./src/wt/worker.js');
        worker.on('message', (result) => {
          results.push(result);
          resolve();
        });
        worker.postMessage(n);
        workers.push(worker);
      });
    };
  
    const start = 10;
    const end = start + numWorkers;
  
    const workerPromises = Array.from({ length: numWorkers }, (_, index) =>
      createWorker(start + index)
    );
  
    await Promise.all(workerPromises);
  
    for (const worker of workers) {
      worker.terminate();
    }
  
    console.log(results);
};

await performCalculations();

//npm run wt