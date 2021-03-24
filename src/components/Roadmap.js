import React from "react";
import "./Roadmap.scss";

export default function Roadmap(props) {
	return (
		<div className="roadmap">
			<img className="roadmap__img" src={props.img} alt="dots" />
			<p className="roadmap__date">{props.date}</p>
			<div className="roadmap__textBlock">
				<p className="roadmap__textBlock__text">{props.text1} </p>
				<p className="roadmap__textBlock__text">{props.text2} </p>
				<p className="roadmap__textBlock__text">{props.text3} </p>
			</div>
		</div>
	);
}
