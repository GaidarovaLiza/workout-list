
export const sortByDate = (a, b) => {
	if (a.date < b.date) {
		return 1;
	}
	if (a.date > b.date) {
		return -1;
	}
	return 0;
}

export const isValidDate = (date) => {
	let regex = new RegExp(
		"([0-9]{4}[.](0[1-9]|1[0-2])[.]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[.](0[1-9]|1[0-2])[.][0-9]{4})"
	);
	let dateOk = regex.test(date);
	if (dateOk) {
		return true;
	} else {
		return false;
	}
}

