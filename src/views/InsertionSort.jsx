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

const InsertionSort = () => {
  const [dataFromChild, setDataFromChild] = useState(generateRandomArray(20, 100));
  const [chartData, setChartData] = useState(optionsChartData);

  const handleDataFromChild = (childData) => {
    setDataFromChild(childData);
    setChartData(generateChartData(childData));
  };

  const insertionSort = async () => {
    if(dataFromChild.length === 0) {

    }
    let array = [...dataFromChild];
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

  useEffect(() => {
    setChartData(generateChartData(dataFromChild));
  }, [dataFromChild]);

  return (
    <>
      <Header title="Insertion Sort Visualization" />
      <RandomArrayGenerator onData={handleDataFromChild} />
      <CommonButton onClick={insertionSort} label="Start Insertion Sort" />
      <Bar data={chartData} />
    </>
  );
};

export default InsertionSort;