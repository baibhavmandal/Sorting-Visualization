const selectionSorter = async (array, setDataFromChild, setChartData, generateChartData) => {
  if(array.length === 0) {
    return; // Exit early if array is empty
  }

  for (let i = 0; i < array.length - 1; ++i) {
    let min_idx = i;
    for (let j = i + 1; j < array.length; ++j) {
      if(array[j] < array[min_idx]) {
        min_idx = j;
      }
    }

    [array[i], array[min_idx]] = [array[min_idx], array[i]];
    setDataFromChild([...array]);
    setChartData(generateChartData(array));
    await new Promise((resolve) => setTimeout(resolve, 10)); // Slow down for visualization
  }

  return;
};

export default selectionSorter;