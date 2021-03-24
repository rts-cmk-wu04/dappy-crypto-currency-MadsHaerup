import React from "react";
import "./Navbar.scss";
import logo from "./logo.svg";
import SoMe from "../SoMe";

export default function Navbar() {
	return (
		<nav className="primaryNav">
			<ul className="primaryNav__list">
				<img className="primaryNav__list__logo" src={logo} alt="logo" />
				<li className="primaryNav__list__link">
					<a href="https://www.google.com/">how it works</a>
				</li>
				<li className="primaryNav__list__link">
					<a href="https://www.google.com/">blog</a>
				</li>
				<li className="primaryNav__list__link">
					<a href="https://www.google.com/">support</a>
				</li>
			</ul>
			<SoMe />
		</nav>
	);
}
