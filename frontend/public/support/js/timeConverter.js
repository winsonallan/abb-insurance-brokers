export function timeConverter(utcString) {
	const date = new Date(utcString);

	// Convert to GMT+7 manually (WIB)
	const options = {
		timeZone: 'Asia/Jakarta',
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
	};

	const formatter = new Intl.DateTimeFormat('en-US', options);
	const parts = formatter.formatToParts(date);
	const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));

	// Build the final string manually to match your desired format
	return `${map.weekday}, ${map.month} ${map.day} ${map.year} ${map.hour}:${map.minute} WIB`;
}

export function shortDateConverter(utcString) {
	const date = new Date(utcString);

	const options = {
		timeZone: 'Asia/Jakarta',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return new Intl.DateTimeFormat('en-US', options)
		.format(date)
		.replace(',', '');
}

export function shorterDateConverter(utcString) {
	const date = new Date(utcString);

	const options = {
		timeZone: 'Asia/Jakarta',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};

	return new Intl.DateTimeFormat('en-US', options)
		.format(date)
		.replace(',', ''); // remove the comma
}
