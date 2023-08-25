import React, { useState } from "react";
import { customStyles } from "../utils";

const DescriptionBox = () => {
	const [open, setOpen] = useState(false);
	const { collapseLabel, collapseContent } = customStyles;

	return (
		<div className="object-center">
			<input id="expandCollapse" type="checkbox" className="peer sr-only" defaultChecked={open} />
			<label
				htmlFor="expandCollapse"
				className={collapseLabel}
				onClick={() => setOpen(!open)}
			>
				<p>Description</p>
				<i className={`fa fa-solid fa-fw ${open ? "fa-caret-up" : "fa-caret-down"}`}/>
			</label>
			<div className={collapseContent}>
				<p>
					Please write a function that accepts a single string as input, and that returns a list of
					English words that can be created using some combination of the letters in the input string.
				</p>
				<div className={"my-3"}>
					<code>
						<p>Example input: "oogd"</p>
						<p>Example output: ["good", "god", "dog", "goo", "do", "go"]</p>
					</code>
				</div>
				<p>
					You can assume you'll be given an array of strings that enumerates all valid English words.
					To determine whether a word is a valid word, you can simply check for its presence in the array (e.g., `WORDS.includes(word)`)
				</p>
			</div>
		</div>
	);
};

export { DescriptionBox };
