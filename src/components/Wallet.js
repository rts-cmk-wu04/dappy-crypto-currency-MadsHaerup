import React from "react";
import wallet from "../img/wallet.svg";
import "./Wallet.scss";

export default function Wallet() {
	return (
		<div className="wallet">
			<div className="wallet__create">
				<h1 className="wallet__create__title">
					Create your first
					<br />
					decentralized wallet
				</h1>
				<p>
					The easiest way to manage
					<br /> multiple cryptocurrency assets
				</p>
				<button
					className="wallet__create__button"
					//eslint-disable-next-line
					onClick={() => gtag("event", "select_content", { "content_type": heading, "test-type": "B" })}>
					create wallet
				</button>
			</div>
			<div className="wallet__image">
				<img src={wallet} alt="wallet" />
			</div>
		</div>
	);
}
