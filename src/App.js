import { useEffect } from "react";
import ReactGA from "react-ga";
import "./App.scss";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./components/Wallet";
function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	});
	return (
		<div className="app">
			<Navbar />
			<Wallet />
			<Content />
			<Footer />
		</div>
	);
}

export default App;
