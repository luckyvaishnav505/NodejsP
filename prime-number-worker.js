const { Worker } = require('worker_threads');
const os = require('os')
//const threadCount = os.cpus().length
const threadCount = 2


const compute_primes = async (start, range) => {
  return new Promise((resolve, reject) => {
    let primes = []
    console.log(`adding worker (${start} => ${start + range})`)
    const worker = new Worker(__dirname+'/prime-number-worker.js', { workerData: { start, range }})

    worker.on('error', reject)
    worker.on('exit', () => resolve(primes))
    worker.on('message', msg => {
      primes = primes.concat(msg)
    })
    return worker;

  })
}

async function main(params) {
  const { min, max } = params
  const range = Math.ceil((max - min) / threadCount)
  let start = min < 2 ? 2 : min
  const workers = []
   console.log("main...........")
  console.log(`Calculating primes with ${threadCount} threads...`);

  for (let i = 0; i < threadCount; i++) {
    const myStart = start
    workers.push(compute_primes(myStart, range))
    start += range
  }


  const primes = await Promise.all(workers)
  return { primes: primes.flat() }
}
main({min:2,max:100})
exports.main = main