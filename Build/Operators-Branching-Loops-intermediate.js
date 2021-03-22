// Question 1 Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

    const printer = (num) => {
        let i;
        for (i=1; i<=num;i++){
        if (i%3===0 & i%5===0){
        console.log("fizzBuzz");
        }
        else if(i%3===0){
        console.log("fizz");
        }
        else if(i%5===0){
        console.log("Buzz");
        }
        else{
        console.log(i);
        }
    }
    }
    
    printer(100)

//Question 2 Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *
    // const starPrinter = (sym) => {
    //     let i;
    //     let str="";
    //     for(i=1;i<=10;i++){
    //     str=str.concat(sym);
    //     console.log(str)
    
    //     }
    // }
    
    // starPrinter("*");

//Question 3 Write a program to take a number input from user and print multiplication table 12 times for that number.

    // const multiply = num =>{
    //     let i;
    //     for(i=0;i<=12;i++){
    //       multiple = num*i;
    //       console.log(`${num} * ${i} :`,multiple);
    //     }
    //   }
    
    //   multiply(56);

//Question 4 Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

    // const fibSeries = (num) =>{
    //     let n,a=0,b=1,next;
    //     for(n=0;n<=num;n++){
    //       if(n==0){
    //         console.log(a,",");
    //       }
    //       else if(n==1){
    //         console.log(b,",");
    //       }
    //       next=a+b;
    //       a=b;
    //       b=next;
    //       console.log(next,",")
    //     }
    //   }
    
    //   fibSeries(15);

//Question 6 Write a Program to take a number input from user and find if the number is Prime or not.

//Question 7 Write a program to take a day as an input and determine whether it is a weekday or weekend.

        // const checkDay = (day) =>{
        //     if(day=="monday" || day=="tuesday" || day=="wednesday" || day=="thrusday" || day=="friday"){
        //     console.log(`${day} is weekday`)
        //     }
        //     else if (day=="saturday" || day=="sunday"){
        //     console.log(`${day} is weekend`)
        //     }
        //     else{
        //     console.log("thats even a day")
        //     }
        // }
        
        // checkDay("tuesday");
