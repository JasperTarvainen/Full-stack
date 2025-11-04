// argv
console.log(process.argv);

// process.env
console.log(process.env);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

// title
console.log(process.title);

// memooryUsage()
console.log(process.memoryUsage);

// update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`)
})

// exit
process.exit(0);
console.log('Hello from after exit');
