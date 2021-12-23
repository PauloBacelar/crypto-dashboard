import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const DataChart = (props) => {
  console.log(props.yLabels);

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
            },
          ],
        }}
      />
    </div>
  );
};

export default DataChart;
