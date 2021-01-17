export default function sortByProperty(property: string) {
	let sortOrder = 1;
	let sortBy = property;
	if (property[0] === "-") {
		sortOrder = -1;
		sortBy = property.substr(1);
	}
	return function sort(a: any, b: any) {
		const result = a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0;
		return result * sortOrder;
	};
}
