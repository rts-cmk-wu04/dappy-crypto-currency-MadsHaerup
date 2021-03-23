import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BiShapeSquare, BiBitcoin } from "react-icons/bi";
import { AiOutlineReddit } from "react-icons/ai";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import "./SoMe.scss";

export default function SoMe() {
	return (
		<div className="soMe">
			<a className="soMe__link" href="https://www.google.com/">
				<FiTwitter />
			</a>
			<a className="soMe__link" href="https://www.google.com/">
				<FaGoogle />
			</a>
			<a className="soMe__link" href="https://www.google.com/">
				<FaGithubAlt />
			</a>
			<a className="soMe__link" href="https://www.google.com/">
				<AiOutlineReddit />
			</a>
			<a className="soMe__link" href="https://www.google.com/">
				<BiBitcoin />
			</a>
			<a className="soMe__link" href="https://www.google.com/">
				<BiShapeSquare />
			</a>
		</div>
	);
}
