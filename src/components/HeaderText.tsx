import React from "react";
import { customStyles } from "../utils";

const HeaderText = () => {
	const { headerTextStyle } = customStyles;

	return (
		<header className={headerTextStyle}>
			Find Words
		</header>
	);
}

export { HeaderText };
