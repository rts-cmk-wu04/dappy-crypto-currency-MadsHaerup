import React from "react";
import "./Subscribe.scss";
import useForm from "./useForm";
import ValidateInfo from "./ValidateInfo";

export default function Subscribe({ submitForm }) {
	const { handleChange, values, handleSubmit, errors } = useForm(submitForm, ValidateInfo);

	return (
		<form className="subscribe" onSubmit={handleSubmit} noValidate>
			<input
				className="subscribe__input"
				type="email"
				name="email"
				value={values.email}
				placeholder="Your e-mail"
				onChange={handleChange}
				required
			/>
			<button type="submit" className="subscribe__button">
				subscribe
			</button>
			{errors.email && <p className="subscribe__error">{errors.email}</p>}
		</form>
	);
}
