
// Check phase is responsible to executes the setImmediate callback and then go the timer phase while I/O executed in poll phase
import fs from 'node:fs';

let counter = 0;

fs.readFile("path/to/file", { encoding: "utf8" }, () => {
  console.log(`Inside I/O, counter = ${++counter}`);

  setImmediate(() => {
    console.log(`setImmediate 1 from I/O callback, counter = ${++counter}`);
  });

  setTimeout(() => {
    console.log(`setTimeout from I/O callback, counter = ${++counter}`);
  }, 0);

  setImmediate(() => {
    console.log(`setImmediate 2 from I/O callback, counter = ${++counter}`);
  });
})

// Outputs
// Inside I/O, counter = 1
// setImmediate 1 from I/O callback, counter = 2
// setImmediate 2 from I/O callback, counter = 3
// setTimeout from I/O callback, counter = 4