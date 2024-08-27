const generateRandomArray = (arraySize = 100, maxValue = 1000) => {
  return Array.from({ length: arraySize }, () => Math.floor(Math.random() * (maxValue + 1)));
};

export default  generateRandomArray;