//Question 6 HomeWork Async live coding Notion ## setInterval
// - write a function which takes a message and time. The function should print that message every X interval.


const messagePrinter = (message, delay) =>{
    const printing = setInterval(() => console.log(message),delay)
  }
  
  messagePrinter("Goooooddd Morninggggg!!!!!!", 100)



//- Write a function which takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"

    const timer = (curr,fin) => {
        let current = curr;
        const countDown = setInterval(() =>{
        console.log(current)
        if (current==fin){
        clearInterval(countDown)
        console.log("Bang Bang!!")
        }
        current--
        },1000);
    }
    
    timer(10,0)

    //Do all the promises exercises using Async/Await 

    // ex:11 Print Data on Success 

      function fakeFetch(msg, shouldReject) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (shouldReject) {
              reject(`error from server: ${msg}`);
            }
            resolve(`from server: ${msg}`);
          }, 3000);
        });
      }
      
      const printdata= async(msg) =>{
        const data = await fakeFetch(msg);
        console.log(data)
      }
      
      printdata("Mehul");

      // question ex12: print data on success, print error on failure

        const printdata= async(msg,shouldReject) =>{
          try{
            const data = await fakeFetch(msg,shouldReject);
            console.log(data)
          }
          catch(err){
            console.log(err)
        
          }
        }
        printdata("Mehul"); 
        //printdata("Mehul",true); //If want to check error handling uncomment this and comment the abouve function call\

/// Question ex13: chaining using async-await

    const getServerResponseLength = async (msg,shouldReject) => {
      try{
        const data = await fakeFetch(msg,shouldReject);
        return console.log("the data from server is ",data.length,"characters long");
      } catch(error){
        console.log(error);
      } 

    }

    getServerResponseLength("Mehul",true);

//question ex14: waterfall data 

  const syncCallToserver = async (msg1, msg2) =>{
    try {
      const data = await fakeFetch(msg1);
      const data2 = await fakeFetch(data + msg2);
      console.log(data2)
    } catch(error){
      console.log(error);
    }
  }
  syncCallToserver("MEhul ", "Chaudhari");



