async function partition(low, high, array, setDataFromChild, setChartData, generateChartData) {
  let pivot = array[high];
  let j = low - 1;

  for (let i = low; i < high; ++i) {
    if (array[i] < pivot) {
      j++;
      [array[j], array[i]] = [array[i], array[j]];
      setDataFromChild([...array]);
      setChartData(generateChartData(array));
      await new Promise((resolve) => setTimeout(resolve, 10)); // Slow down for visualization
    }
  }

  [array[high], array[j + 1]] = [array[j + 1], array[high]];

  setDataFromChild([...array]);
  setChartData(generateChartData(array));
  await new Promise((resolve) => setTimeout(resolve, 10)); // Slow down for visualization

  return j + 1;
}

async function sort(low, high, array, setDataFromChild, setChartData, generateChartData) {
  if (low < high) {
    let pi = await partition(low, high, array, setDataFromChild, setChartData, generateChartData);

    await sort(low, pi - 1, array, setDataFromChild, setChartData, generateChartData);
    await sort(pi + 1, high, array, setDataFromChild, setChartData, generateChartData);
  }
}

export default async function quickSorter(array, setDataFromChild, setChartData, generateChartData) {
  let high = array.length - 1;
  let low = 0;
  await sort(low, high, array, setDataFromChild, setChartData, generateChartData);
}