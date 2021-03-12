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

    





