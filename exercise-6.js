const getCoordinates = ({x,y}) => {
    // Your ES6 code here
      let arrayFromObject = [];
      arrayFromObject.push(x,y);
      return arrayFromObject;
  };
  
  const point = { x: 5, y: 10 };
  console.log(getCoordinates(point)); // [5, 10]