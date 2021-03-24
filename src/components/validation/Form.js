import React, { useState } from "react";
import FormSucces from "./FormSucces";
import Subscribe from "./Subscribe";

export default function Form() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	function submitForm() {
		setIsSubmitted(true);
	}
	return <div>{!isSubmitted ? <Subscribe submitForm={submitForm} /> : <FormSucces />}</div>;
}
