import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import ReactGA from "react-ga";

ReactGA.initialize("G-FNFRF1D7MN");

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
