import "./App.scss";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Wallet from "./components/Wallet";
function App() {
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
