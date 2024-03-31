// This phase has FIFO queue to execute the timers callbacks....
// setTimeout and setInterval Executes here



const timerId = setInterval(()=> {
    console.log("I am in loop please save.....")
},1000)

setTimeout(()=> {
     console.log("You are saved now...")
     clearInterval(timerId);
},5000)
