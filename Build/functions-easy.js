//Question 1 Given a and b, your function should return the value of ab

    // const power = (a,b) => {
    //     const answer = a**b;
    //     return console.log(`${a} raise to ${b} is`,answer);
    // }
    
    // power(2,4);

//Question 2 Given length of a regular hexagon, your function should return area of the hexagon.


    // const areaOfHexagon = (length) => {
    //     area = 2.598*(length*length)
    //     return console.log(`Area the of hexagon with ${length} length is :`, area);
    // }
    
    // areaOfHexagon(15);

//Question 3 Given a sentence, your functions should return the number of words in the sentence.

    // const noOfWords = (string) =>{
    //   let i, count = 0;
    //   for (i=0;i<=string.length;i++){
    //     if(string[i]===" "){
    //       count = count + 1;
    //     }
    //   }
    //   return count+1
    // }

    // console.log(noOfWords("we are neog"));

    //Question 4 Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

        // const min = (...num) =>{
        //     const minimum = Math.min(...num);
        //     return minimum
        // }
        
        // console.log(min(1,2,3,0));

//Question 5 Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

    // const max = (...num) =>{
    //     const maximum = Math.max(...num);
    //     return maximum;
    //   }
    
    //   console.log(max(1,2,3,0));

//Question 6 Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:

    // const triangleType = (side1,side2,side3)=>{
    //     if(side1==side2 && side2==side3 && side3==side1){
    //     console.log("The triangle is equilateral triangle")
    //     }
    //     else if((side1==side2 && side2!==side3 && side3!==side1) || (side1!==side2 && side2==side3 && side3!==side1) |           |              (side1!==side2&& side2!==side3 &&side1==side3)){
    //      console.log("The triange is isosceles triangle")
    //      }
    //     else if (side1!==side2 && side2!==side3 && side3!==side1){
    //              console.log("The triangle is scalen triangle")
    //     }
    //     else{
    //              console.log("Is that even a triangle");
    //     }
    // }
    
    // triangleType(10,20,30);