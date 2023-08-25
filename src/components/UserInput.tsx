import React, { useState } from "react";
import { findWords } from "../utils";
import { customStyles } from "../utils";

const UserInput = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [lastInput, setLastInput] = useState<string>("");
	const [errorText, setErrorText] = useState<string | null>(null);
	const [validWords, setValidWords] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const charactersOnly: RegExp = new RegExp("^[a-zA-Z]*$");
	const { userInputStyle, loadingSpinnerStyle, submitButtonStyle } = customStyles;

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputValue?.length < 2) {
			setErrorText("You must enter at least 2 letters");
		} else {
			setErrorText(null);
			setLastInput(inputValue);
			setValidWords([]);
			setLoading(true);
			const response = await findWords({input: inputValue.toLowerCase()});
			setLoading(false);
			if (response?.length) {
				setValidWords(response);
				setInputValue("");
			} else {
				setErrorText("No results found")
			}
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	  if (e.target.value?.length > 5) {
			setErrorText("You can enter at most 5 letters");
		} else if (!loading) {
			if (charactersOnly.test(e.target.value)) {
				if (errorText?.length) {
					setErrorText(null);
				}
				setInputValue(e.target.value);
			} else {
				setErrorText("You can enter valid letters only (A-Z)");
			}
		}
	};

	return (
		<div>
			<div className="object-center bg-slate-200 my-3">
				<form onSubmit={handleSubmit}>
					<input className={userInputStyle}
						 value={inputValue}
						 onChange={handleChange}
						 placeholder={"Enter letters..."}
						 disabled={loading}
					/>
					<div className={"h-6 mb-2"}>
						{errorText && (<p className={"text-red-600"}>{errorText}</p>)}
					</div>
					<button className={submitButtonStyle} type={"submit"} disabled={loading}>
						{loading && (<div className={loadingSpinnerStyle} role="status"></div>)}
						{loading ? "Processing" : "Submit"}
					</button>
				</form>
			</div>

			{validWords?.length > 1 && (
				<div className="object-center bg-slate-50 my-3">
					<p className={"text-xl font-semibold m-1 text-slate-900"}>Possible English Words</p>
					<p className={"text-lg m-1 text-slate-800"}>Input: "{lastInput}"</p>
					{validWords?.map((word, idx) => (
						<p key={idx} className={"text-blue-600"}>{word}</p>
					))}
				</div>
			)}
		</div>
	);
};

export { UserInput };
