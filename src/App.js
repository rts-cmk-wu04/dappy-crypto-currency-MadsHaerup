import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wallet from "./components/Wallet";
function App() {
	return (
		<div className="app">
			<Navbar />
			<Wallet />
			<Footer />
		</div>
	);
}

export default App;
