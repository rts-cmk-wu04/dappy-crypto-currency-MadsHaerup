import React from "react";
import multi from "../img/multi.svg";
import openSource from "../img/opensource.svg";
import tokens from "../img/tokens.svg";
import exchange from "../img/exchange.svg";
import "./Content.scss";
import Roadmap from "./Roadmap";
import dots from "../img/dots.svg";
import smalldots from "../img/smalldots.svg";
import darkpurple from "../img/darkpurple.svg";
import dotspurple from "../img/dotspurple.svg";

export default function Content() {
	return (
		<section className="content">
			<article className="content__container">
				<p>
					Dappy is light wallet powered by Blockstack. It uses Gaia
					<br />
					decentralized storage and encryption option.Dappy doesn't
					<br />
					store or proceed user private key,the all data are securely
					<br />
					stored in the Gaia.Dappy was created by the BC Net that
					<br />
					trustin crypto and decentralized applications.
				</p>
			</article>

			<article className="content__container">
				<h1>Multi-currencies</h1>
				<img src={multi} alt="multi-currencies" />
				<p>
					Receive, send and store the most popular coins, like
					<br />
					Bitcoin, Ethereum, Litecoin, Dash and lots more.
				</p>
			</article>

			<article className="content__container">
				<h1>Free and open source</h1>
				<img src={openSource} alt="open-source" />
				<p>
					Fully open and transparent wallet. Our code is
					<br />
					<span>open source</span>and trusted by Blockstack Team.
				</p>
			</article>

			<article className="content__container">
				<h1>Tokens</h1>
				<img src={tokens} alt="tokens" />
				<p>
					Full support for any tokens on Ethereum network.
					<br />
					Bitcoin tokens (Omnilayer) is coming soon.
				</p>
			</article>

			<article className="content__container">
				<h1>Roadmap</h1>
				<Roadmap
					img={dots}
					date="May 2018"
					text1="Blockstack Autorisation"
					text2="Decentralized storage Gaia"
					text3="BTC, ETH, ETC, LTC, BCH, BTG, DOGE, DCR, DACH"
				/>
				<Roadmap
					img={dots}
					date="June 2018"
					text1="Support ERC20 tokens"
					text2="Support Custom token"
					text3="Exchange powered by ShapeShift"
				/>
				<Roadmap
					img={darkpurple}
					date="2018 – 2019"
					text1="Add more coins: ZEC, DCR, XRP..."
					text2="Blockstack contact list"
					text3="Support token for each coins"
				/>
				<Roadmap
					img={dotspurple}
					date=""
					text1="Support private key in different formats"
					text2="Multilanguage support"
					text3="Different UI themes"
				/>
				<Roadmap
					img={smalldots}
					date=""
					text1="Ledger, Trezor integrations"
					text2="In-app marketplace or DApp browser"
					text3="and lots more"
				/>
			</article>

			<article className="content__container">
				<h1>Exchange</h1>
				<p>
					In-app exchange is supported by ShapeShift, it
					<br />
					allows to convert coins to each other in the most
					<br />
					intuitive and easiest way
				</p>
				<img src={exchange} alt="exchange" />
			</article>
		</section>
	);
}
