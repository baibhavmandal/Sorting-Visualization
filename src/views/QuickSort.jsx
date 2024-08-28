import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

// Components
import RandomArrayGenerator from "../components/RandomArrayGenerator";
import Header from "../components/Header.jsx"
import {CommonButton} from "../components/Button.jsx"

// Utils
import generateRandomArray from "../utils/generateRandomArray.js";
import {generateChartData, optionsChartData} from "../utils/chartData.js"
import quickSorter from "../utils/quickSorter.js"

const QuickSort = () => {
  const [dataFromChild, setDataFromChild] = useState(generateRandomArray(20, 100));
  const [chartData, setChartData] = useState(optionsChartData);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDataFromChild = (childData) => {
    setDataFromChild(childData);
    setChartData(generateChartData(childData));
  };

  const startSort = () => {
    setIsDisabled(true);  // Disable input during sorting
    quickSorter([...dataFromChild], setDataFromChild, setChartData, generateChartData)
      .finally(() => setIsDisabled(false));  // Re-enable input after sorting
  };

  useEffect(() => {
    setChartData(generateChartData(dataFromChild));
  }, [dataFromChild]);

  return (
    <>
      <Header title="Quick Sort Visualization" />
      <RandomArrayGenerator onData={handleDataFromChild} isDisabled={isDisabled} />
      <CommonButton onClick={startSort} label="Start Quick Sort" />
      <Bar data={chartData} />
    </>
  );
};

export default QuickSort;