const getShortestString = (array) => {
    // Your ES6 code here
    let shortestString = array[0];
    for(let i=1;i<array.length;i++){
      if(array[i].length<=shortestString.length)
      shortestString = array[i];
    }
    return shortestString;
  };
  
  console.log(getShortestString(["primary", "secondary", "education", "exams","Naman"])); // exams