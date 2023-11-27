export const chartOptions = {
	chart: {
		id: "area-chart",
	},
	xaxis: {
		categories: [
			"ديسمبر",
			"نوفمبر",
			"اكتوبر",
			"سبتمبر",
			"اغسطس",
			"يوليو",
			"يونيو",
			"مايو",
			"ابريل",
			"مارس",
			"فبراير",
			"يناير",
		],
		labels: {
			style: {
				fontFamily: "Neo Sans Arabic",
				fontSize: "15px",
				fontWeight: "500",
			},
		},
		trim: false,
		hideOverlappingLabels: false,
		tooltip: false,
	},
	yaxis: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		theme: "dark",
		x: {
			show: false,
		},
		custom: function ({ series, seriesIndex, dataPointIndex, w }) {
			const seriesName = w.globals.seriesNames[seriesIndex];
			const dataValue = series[seriesIndex][dataPointIndex];

			return `<div style="
			background-color:#1E1B39;
			
			padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	border-radius: 4px; gap:5px;">
	
	<p style="	display: flex;
	flex-direction: row-reverse;
	font-size: 12.11px;
	font-weight: 400;
	font-family: Neo Sans Arabic; gap:3px;">
	<span>${dataValue}</span>
	<span>${seriesName}</span>
					</p>
					<div style="display:flex; gap:3px;  justify-content: flex-end;">
					<span style="	font-weight: 500;
	font-size: 10px;
	color: #8a74f9;
	">13% </span>
	<span style="
	height: 10px;
	width: 10px;
	border-radius: 50%;
	background-color: #8a74f9;
	display: flex;
	justify-content: center;
	align-items: center;
				" >
			</span>
				</div>
				</div>`;
		},
	},
	fill: {
		type: "gradient",
		colors: ["#8A74F9"],
		gradient: {
			shadeIntensity: 1,
			opacityFrom: 0.2,
			opacityTo: 0.9,
			stops: [0, 100],
		},
	},
	stroke: {
		curve: "smooth",
		colors: ["#8A74F9"],
		width: 3,
	},
	markers: {
		size: 0,
		colors: "#8A74F9",
		strokeColors: "#fff",
		strokeWidth: 2,
		hover: {
			size: 8,
		},
	},
};

export const chartSeries = [
	{
		name: "إستخدام",
		data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 45, 80, 70],
	},
];
