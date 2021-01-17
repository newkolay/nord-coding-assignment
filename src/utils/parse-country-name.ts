export default function parseCountryName(name: string) {
	return name.substr(0, name.indexOf("#") - 1);
}
