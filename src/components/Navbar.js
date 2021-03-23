import React from "react";
import "./Navbar.scss";
import logo from "../img/logo.svg";
import SoMe from "./SoMe";

export default function Navbar() {
	return (
		<nav className="primaryNav">
			<ul className="primaryNav__list">
				<img className="primaryNav__list__logo" src={logo} alt="logo" />
				<li className="primaryNav__list__link">
					<a href="#">how it works</a>
				</li>
				<li className="primaryNav__list__link">
					<a href="#">blog</a>
				</li>
				<li className="primaryNav__list__link">
					<a href="#">support</a>
				</li>
			</ul>
			<SoMe />
		</nav>
	);
}
