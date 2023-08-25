interface CustomStyles {
	[key: string]: string,
}

const customStyles: CustomStyles = {
	collapseLabel: "w-full flex justify-center items-center p-1 bg-slate-400 " +
		"hover:bg-slate-200 hover:cursor-pointer peer-checked:font-medium",
	collapseContent: "w-full overflow-hidden h-0 bg-slate-100 peer-checked:h-fit peer-checked:p-4 " +
		"peer-checked:2xl:px-[400px] peer-checked:lg:px-[200px] peer-checked:sm:px-[100px]",
	headerTextStyle: "text-3xl font-semibold p-3 mb-3 bg-slate-800 text-white text-center",
	userInputStyle: "drop-shadow-lg border-solid border mt-5 mb-3 w-auto xs:w-[300px] stroke text-slate-900 p-1",
	loadingSpinnerStyle: "inline-block h-4 w-4 mr-2 animate-spin rounded-full border-2 border-solid border-current " +
		"border-r-transparent align-[-0.125em] text-yellow-300 motion-reduce:animate-[spin_1.5s_linear_infinite]",
	submitButtonStyle: "rounded-full px-4 py-1 bg-slate-600 mb-3 text-md text-yellow-300"
};

export { customStyles };
