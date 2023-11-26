import "./App.css";

// components
import Header from "./components/Header/Header";

import Card from "./components/Card/Card";

const App = () => {
	return (
		<main className="app">
			<Header />
			<div className="card_and_chart">
				<Card />
			</div>
		</main>
	);
};

export default App;
