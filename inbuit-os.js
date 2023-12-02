// Module OS

// importing a module in nodejs ( CommonJS )

const os = require("os");

console.log("Total Memory", os.totalmem()); // ram size

console.log("Free Memory", os.freemem()); // free memory

console.log("Version", os.version()); // version

console.log("System Info", os.cpus()); // number of cpus
