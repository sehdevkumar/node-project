// Javascript  by nature is a single thread language but seems like different because of the environment where it runs , for example it runs on browser so browser provides all API's to handle async tasks.


// Example 

// callbacks , promises and async/await


// setTimeout

setTimeout(() => {
     console.log("I will run after some  time.")
}, 5000);

// Promises 
const promises = Promise.all([Promise.resolve(12),Promise.resolve(22)])

promises.then(d=> {
      console.log(d)
})

// Async Await
async function callme() {
     const waitForMe = await Promise.all([100])
     console.log(waitForMe);
}

callme()


import { throws } from 'node:assert';
// You can do file reading also which also the part of async or non-blocking programming

import fs from 'node:fs';

fs.readFile('./async-programming.js',(err,data)=> {
    
    if(err) throw err;

    console.log(data.toString());

})



// Serve/ XML request

import XMLHttpRequest from "xmlhttprequest";

const xmlRequest = new XMLHttpRequest()

xmlRequest.onreadystatechange=()=> {
    if(xmlRequest.readyState===4) {
        xmlRequest.status === 200
          ? console.log(xmlRequest.responseText)
          : console.error("error");
    }

}

xmlRequest.open('get','https://www.google.com')
xmlRequest.send()






