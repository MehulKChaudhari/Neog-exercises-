//Given array of integers

//Question 1 Sum of All Odd number in array.

    const numArr = [1,2,3,4,10,22,15,36,50,28];

    const oddNumArr = numArr.filter(num => num%2 !==0);

    console.log(oddNumArr);

    oddNumArr.reduce((acc,currval) => {
        return acc+currval;
    })

//Question 2 Sum of All numbers at odd indices in array.

    const numArr = [1,2,3,4,10,22,15,36,50,28];

    const arrOddIndex = numArr.filter((item, index)=> index%2 !==0); 

    console.log(arrOddIndex);

    arrOddIndex.reduce((acc,currval)=> acc +currval)

//Question 3 Find the biggest number in array 

    const numArr = [1,2,3,4,10,22,15,36,50,28];

    for(i =0;i < numArr.length; ++i){
        if(numArr[0] < numArr[i]){
            numArr[0] = numArr[i]
    }
    }
    const biggestNumInArr = numArr[0];

    console.log(biggestNumInArr)

//Question 4 Find the numbers divisible by 10

    const numArr = [1,2,3,4,10,22,15,30,50,20];

    const divisibleByTen = numArr.filter((item)=> item%10 ==0); 

    console.log(divisibleByTen);

//Question 5 Return an array of numbers where odd number are increament by one and even is decrement by 1 

    const numArr = [1,2,3,4,10,22,15,30,50,20];

    const incAndDec = numArr.map(item => {
    if(item%2 !==0){
        return item+1;
    } else{
        return item-1;
    }
    })

    console.log(incAndDec)

//Question 6  Return an object with sum of all odd numbers and even numbers seperately. 

        const numArr = [1,2,3,4,10,22,15,36,50,28];

        const evenAndOddSum = arr =>{ 
        const obj ={}
            const oddNumArr = arr.filter(num => num%2 !==0);

            console.log(oddNumArr);
            const evenNumArr = arr.filter(num => num%2 ==0);

            console.log(evenNumArr);

            const oddSum = oddNumArr.reduce((acc,currval) => {
                return acc+currval;
            })

            const evenSum = evenNumArr.reduce((acc,currval) => {
                return acc+currval;
            })

            obj.odd = oddSum;
            obj.even = evenSum;

            return obj;

        }
        evenAndOddSum(numArr);

//Given That array of strings

    //Question 1 Find the Number of strings with similar no of characters 


        const array = ["apple", "mango","orange", "papaya"];

        const similarLengthStrings=array=>{
        const obj = {};

        array.forEach(item => {
            if(obj[item.length]==1){
            obj[item.length] = obj[item.length] +1 
            } else{
            obj[item.length] = 1 
            }
        }) 
        return obj;  
        }


        console.log(similarLengthStrings(array))

    //Question 2 return an array which has strings having vowels. 

            //Reference MDN .match docs 
        const array = ["apple", "mango","orange", "papaya","hjklkjh","yhghfgh","aeiou", "djgfhfrio"];

        const newArr = (array) => {
        const str = array.filter(item => item.match(/[aeiou]/g))
        return str 
        }


        console.log(newArr(array));

    //Question 3 return string as key and string length as value

        const input = ["apple", "orange","kiwi","berry","strawberry"]

        const length = item => item.length;

        const obj = (acc, item) => {
            acc[item]=length(item);
            return acc;  
        }
        const reducer = a =>a.reduce(obj,{});

        console.log(reducer(input))

        //other way to use only one function and call immediately empty object
        // const reducer = a =>a.reduce((acc,item) =>{
        //     acc[item]=length(item);
        //     return acc;
        //   },
        //   {});





