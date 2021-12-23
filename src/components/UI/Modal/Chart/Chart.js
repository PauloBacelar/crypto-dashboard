import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const DataChart = (props) => {
  const isUp = props.yLabels[props.yLabels.length - 1] >= props.yLabels[0];

  return (
    <div id="chart">
      <Chart
        type="line"
        datasetIdKey="id"
        data={{
          labels: props.xLabels,
          datasets: [
            {
              id: 1,
              label: `${props.name} price`,
              data: props.yLabels,
              backgroundColor: isUp
                ? "rgba(16, 100, 42, .5)"
                : "rgba(100, 16, 42, .5)",
              fill: true,
              pointRadius: 1.5,
              borderColor: isUp ? "rgb(16, 175, 42)" : "rgb(200, 16, 42)",
              borderWidth: 2,
            },
          ],
          options: {
            responsive: true,
          },
        }}
      />
    </div>
  );
};

export default DataChart;
