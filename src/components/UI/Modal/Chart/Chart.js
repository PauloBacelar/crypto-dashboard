import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const DataChart = (props) => {
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
              label: "",
              data: props.yLabels,
              backgroundColor: "rgba(16, 100, 42, .5)",
              fill: true,
              pointRadius: 1.5,
              borderColor: "rgb(16, 200, 42)",
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default DataChart;
