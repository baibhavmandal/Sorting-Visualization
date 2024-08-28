const insertionSort = async (array, setDataFromChild, setChartData, generateChartData) => {
  if(array.length === 0) {
    return; // Exit early if array is empty
  }

  for (let i = 1; i < array.length; ++i) {
    let j = i - 1;
    let key = array[i];
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
      setDataFromChild([...array]);
      setChartData(generateChartData(array));
      await new Promise((resolve) => setTimeout(resolve, 10)); // Slow down for visualization
    }
    array[j + 1] = key;
    setDataFromChild([...array]);
    setChartData(generateChartData(array));
    await new Promise((resolve) => setTimeout(resolve, 10)); // Slow down for visualization
  }
};

export default insertionSort;