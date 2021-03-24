import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
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
