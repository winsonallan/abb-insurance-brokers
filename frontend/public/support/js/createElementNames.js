export function createElementNames(objName) {
	const stripedStr = objName.trim().replaceAll(' ', '-');
	const lowerCaseStripedStr = stripedStr.toLowerCase();
	const capitalizedStr = capitalizeWords(objName.toLowerCase());

	return {
		objInfoName: objName,
		striped: stripedStr,
		lowerCaseStriped: lowerCaseStripedStr,
		capitalized: capitalizedStr,
	};
}

export function capitalizeWords(str) {
	return str
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}
