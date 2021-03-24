import React from "react";
import SoMe from "../SoMe";
import Form from "../validation/Form";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<p className="footer__container__titel">about</p>
				<ul className="footer__container__list">
					<li className="footer__container__list__items">introducing</li>
					<li className="footer__container__list__items">terms of service</li>
					<li className="footer__container__list__items">privacy policy</li>
				</ul>
			</div>

			<div className="footer__container">
				<p className="footer__container__titel">contact</p>
				<a className="footer__container__link" href="mailto:hello@dappywallet.com">
					hello@dappywallet.com
				</a>
				<div>
					<SoMe />
				</div>
			</div>

			<div className="footer__container">
				<p className="footer__container__titel">newsletter</p>
				<p className="footer__container__text">Please enter your e-mail if want to receive updates.</p>
				<Form />
			</div>
		</footer>
	);
}
