import Chart from "react-apexcharts";
import "./Chart.css";

import { chartOptions, chartSeries } from "./chart-config";

const ChartComponent = () => {
	return (
		<div className="chart-component">
			<Chart
				options={chartOptions}
				series={chartSeries}
				type="area"
				height="260"
				width="1000"
			/>
		</div>
	);
};

export default ChartComponent;
