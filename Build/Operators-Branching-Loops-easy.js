/// 001 Operators, Branching, Loops
//Question 1 Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

    const sum = (num1,num2,num3,num4,num5) =>{
        return num1+num2+num3+num4+num5;
    }
    
    console.log("The sum of Numbers is ",sum(5,13,7,21,48))

//Question 2 Write a program to take a number input from user and determine whether the number is odd or even.

        var number = prompt('Enter the number to check whether it is even or not ');

        const evenOrOdd = (num) =>{
            if(num%2 ==0){
            return "The number is even";
            }
            else{
            return "The number is odd";
            }
        }
        
        console.log(evenOrOdd(number));

//Question 3 Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

        const minOrMax = (num1,num2)=>{

            if (num1<num2){
            console.log("The maximum number is : ",num2); 
            console.log("The minimum number is :",num1);
            } else{
                console.log("The maximum number is : ",num1); 
            console.log("The minimum number is :",num2);
            }
            }
        
            minOrMax(40,55);
            minOrMax(36,12);

// Question 4 Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

    // const maximum = (num1,num2,num3) =>{
    //     if(num1>num2 & num1>num3){
    //       console.log("Num1 is maximum")
    //     }
    //     else if(num2>num1 & num2>num3){
    //       console.log("Num2 is Maximum");
    //     }
    //     else{
    //       console.log("Num3 is Maximum");
    //     }
    //   }
    //   maximum(10,2,3);// opt Num1 is Maximum
    //   maximum(8,23,17);// opt Num2 is Maximum
    //   maximum(10,20,30);// opt Num3 is Maximum

// Question 5 Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

    // const minimum = (num1,num2,num3) =>{
    //     if(num1<num2 & num1<num3){
    //     console.log("Num1 is minimum");
    //     }
    //     else if(num2<num1 & num2<num3){
    //     console.log("Num2 is minimum");
    //     }
    //     else{
    //     console.log("Num3 is minimum");
    //     }
    // }
    
    // minimum(35,29,46)//Num2 is minimum

// Question 6 Write program to take a month as an input from the user and find out whether the month has 31 days or not.
    // const month = (name) =>{
    //     if(name=="january"|| name=="march" || name=="may" ||name=="july" || name=="august" || name=="october" || name=="december"){
    //     console.log("The Month has 31 days");
    //     }
    //     else if (name=="april" || name=="june" || name=="september" || name=="november"){
    //     console.log("The month has 30 days");
    //     }
    //     else if (name=="february"){
    //     console.log("The month has 28 days");
    //     }
    //     else{
    //     console.log("The month doesn't exists in my calender may be you're from another planet :P")
    //     }
    // }
    
    // const name = prompt("Enter the month name:")
    // month(name);



