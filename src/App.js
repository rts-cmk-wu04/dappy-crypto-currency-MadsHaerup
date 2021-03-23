import "./App.scss";
import cloud from "./img/cloud.svg";
import bottomRightWave from "./img/bottomwave.svg";
import bottomLeftWave from "./img/bottomwave2.svg";
function App() {
	return (
		<div className="app">
			<div className="app__leftCornerCloud">
				<img src={cloud} alt="green cloud" />
			</div>

			<div className="app__rightCornerCloud">
				<img className="app__rightCornerCloud__left" src={bottomLeftWave} alt="wave" />
				<img className="app__rightCornerCloud__right" src={bottomRightWave} alt="wave" />
			</div>
		</div>
	);
}

export default App;
