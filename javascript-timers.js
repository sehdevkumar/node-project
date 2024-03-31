// Discover JavaScript Timers
// These all API's are standard and supported in Node Environment

// Time out

setTimeout(()=> {
      console.log("I am out after sometime!!");
},5000)

setImmediate(()=> {
    console.log("I am running behind with zero delay.....")
})

const intervalId  = setInterval(() => {
     console.log("I will love forever......but do not know about my life....");
}, 1000);


setTimeout(()=> {
    console.log("My life is End Now , sorry , i did promise to live for forever...");
    clearInterval(intervalId); 
},20000)


// Recursion timer using the setTimeout, may help to avoid the inconsistency when use the setIntervals for different time



let timeOutId = 0;
let i = 0;
const heartPumping = ()=> {
    
    if(i===5) {
         console.log("I am dead now....")
         clearTimeout(timeOutId);
         return
    }

    i++;

   timeOutId =  setTimeout(heartPumping,1000)
}

 timeOutId =  setTimeout(heartPumping,1000)