import { regexDate, regexDistance } from "./constans";

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
	const dateOk = regexDate.test(date);
	return dateOk
}

export const isValidDistance = (distance) => {
	const distanceOk = regexDistance.test(distance);
	return distanceOk
}
