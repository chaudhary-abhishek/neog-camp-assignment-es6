const getOddNumbers = (array) => {
  // Your ES6 code here
  let arrayOfOddNumber = [];
  for(let i=0;i<array.length;i++) {
    if(array[i]%2!=0)
    arrayOfOddNumber.push(array[i]);
    

  }
  return arrayOfOddNumber;
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); 