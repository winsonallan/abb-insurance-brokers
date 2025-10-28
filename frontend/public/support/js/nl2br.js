export function nl2br(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/\r?\n/g, '<br>');
}

export function nl21rem(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/\r?\n/g, '<div style="height: 1rem"></div>');
}
