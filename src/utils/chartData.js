export const generateChartData = (data) => ({
  labels: data.map((_, index) => index + 1),
  datasets: [
    {
      label: "Array Values",
      data: data,
      backgroundColor: "#03045eff",
      borderColor: "#023e8aff",
      borderWidth: 2,
    },
  ],
});

export const optionsChartData = {
  labels: [1, 2, 3],
  datasets: [
    {
      label: "Array Values",
      data: [2, 3, 1],
      backgroundColor: "#03045eff",
      borderColor: "#023e8aff",
      borderWidth: 2,
    },
  ],
}