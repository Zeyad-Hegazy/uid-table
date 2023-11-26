import "./App.css";

// components
import Header from "./components/Header/Header";

import Card from "./components/Card/Card";
import ChartComponent from "./components/Chart/Chart";

const App = () => {
	return (
		<main className="app">
			<Header />
			<div className="card_and_chart">
				<Card />
				<ChartComponent />
			</div>
		</main>
	);
};

export default App;
