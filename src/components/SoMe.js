import React from "react";
import { FiTwitter } from "react-icons/fi";
import { BiShapeSquare, BiBitcoin } from "react-icons/bi";
import { AiOutlineReddit } from "react-icons/ai";
import { FaGithubAlt } from "react-icons/fa";
import "./SoMe.scss";

export default function SoMe() {
	return (
		<div className="soMe">
			<a className="soMe__link" href="#">
				<FiTwitter />
			</a>
			<a className="soMe__link" href="#">
				<FaGithubAlt />
			</a>
			<a className="soMe__link" href="#">
				<AiOutlineReddit />
			</a>
			<a className="soMe__link" href="#">
				<BiBitcoin />
			</a>
			<a className="soMe__link" href="#">
				<BiShapeSquare />
			</a>
		</div>
	);
}
