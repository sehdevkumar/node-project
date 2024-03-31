
import fs from 'node:fs'
const data = fs.readFileSync("./file-blocking.md"); // blocks here until file is read

console.log(data.toString())


fs.readFile('./file-non-blocking.md', (err, data) => {
  if (err) throw err;

  console.log(data.toString())
});

console.log("I am in last")
