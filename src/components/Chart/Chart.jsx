import Chart from "react-apexcharts";
import "./Chart.css";

import { chartOptions, chartSeries } from "./chart-config";

import arrow from "../../assets/down-arrow.svg";

const ChartComponent = () => {
	return (
		<div className="chart-component">
			<div className="chart-content">
				<div className="filter">
					<select name="filter" id="filter">
						<option value="سنويا">سنويا</option>
						<option value="شهريا">شهريا</option>
						<option value="اسبوعيا">اسبوعيا</option>
					</select>
				</div>
				<div className="chart-title" dir="rtl">
					<h3>إحصائيات إستخدام القسيمة</h3>
					<p>
						05 يوليو , 2023 - 05 أغسطس , 2023
						<span>
							<img src={arrow} alt="down arrow" />
						</span>
					</p>
				</div>
			</div>

			<Chart
				options={chartOptions}
				series={chartSeries}
				type="area"
				height="190"
				width="1000"
			/>
		</div>
	);
};

export default ChartComponent;
