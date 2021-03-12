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

