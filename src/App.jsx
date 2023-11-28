import "./App.css";

// components
import Header from "./components/Header/Header";

import Card from "./components/Card/Card";
import ChartComponent from "./components/Chart/Chart";
import Table from "./components/Table/Table";

const App = () => {
	return (
		<main className="app">
			<Header />
			<div className="card_and_chart">
				<Card />
				<ChartComponent />
			</div>
			<Table />
		</main>
	);
};

export default App;
