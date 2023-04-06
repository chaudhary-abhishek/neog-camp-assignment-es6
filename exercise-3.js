const reverseString = (string) => {
    // Your ES6 code here
    let newString = "";
    for(let i=string.length-1;i>=0;i--){
      newString = newString+string[i]
      
    }
    return newString;
  };
  
  console.log(reverseString("neoG Camp")); // pmaC G