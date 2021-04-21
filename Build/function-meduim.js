//Intermediate Questions
//QUestion 1 Given an array, your function should return the length of the array.

// const funcLength = (arr) => arr.length;

// const array = [1,2,5,3,"mehul"];

// console.log(funcLength(array));

//question Given an array and an item, your function should return the index at which the item is present.

// const indexFinder = (arr,num) =>{
//   let i ;
//     for(i=0; i<=arr.length;i++){
//       if(arr[i]==num){
//         return i ;
//       }
//     }
// }

// const array = [1,6,3,5,8,9,10];
// console.log(indexFinder(array,10));

//Question 3 Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

// const replacer = (arr,num1,num2) => arr.map((item) => {
//   if(item===num1){
//     return num2;
//   }else{
//     return item;
//   }

// })

// const numArr = [1,5,3,5,6,8]

// console.log(replacer(numArr, 1, 0));

//Question 4 Given two arrays, your function should return single merged array.
// const arrayMerger = (arr1,arr2) =>{
//     return arr1.concat(arr2);
// }

// console.log(arrayMerger([1,3,5], [2,4,6]))

// Question 5 Given a string and an index, your function should return the character present at that index in the string.

// const characterAt = (string,index) =>{
//     return console.log(`the Character at index ${index} is `,string[index]);
// }

// characterAt("MEhul",4);

//Question 6 Given two dates, your function should return which one comes before the other.

//Question 6 Given two dates, your function should return which one comes before the other.

    // const earlyDate = (str1, str2 ) =>{
    //      const date1 = str1.split("/");
    //      const date2 = str2.split("/");
    //      if(date1[3]==date2[3]){
    //        if(date1[2]==date2[2]){
    //          if(date1[1]==date2[1]){
    //            console.log("Both the dates are same")
    //          }else if(date1[1]<date2[1]){
    //           console.log("minimum",date1)
    //         }
    //          else{
    //            console.log("minimum",date2);
    //         }
    //        }
    //      else if(date1[2]<date2[2]){
    //          console.log("minimum",date1)
    //          }
    //         else{
    //            console.log("minimum",date2);
    //          }
    //      }
    //      else if (date1[3]<date2[3]){
    //        console.log("date1 is minimum",date1);
    //     }
    //     else {
    //        console.log("date2 is minimum",date2);
    //      }

    //    }

    //   earlyDate('24/01/2021', '24/01/2021');
