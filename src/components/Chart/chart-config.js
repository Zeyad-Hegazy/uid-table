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
