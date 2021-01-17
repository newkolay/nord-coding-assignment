import axios from "axios";
import Server from "../common/types";
import parseCountryName from "../utils/parse-country-name";

const getCountryFlag = async (name: string) => {
	let countryName = name;
	if (name === "United States") {
		countryName = "United States of America";
	}
	const response = await axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`);

	return response.data[0].flag;
};

export default async function getFlags(servers: Server[]) {
	const flags = new Map<string, string>();
	const uniqueCountries: string[] = [];

	servers.forEach((server) => {
		const countryName = parseCountryName(server.name);
		if (!uniqueCountries.includes(countryName)) {
			uniqueCountries.push(countryName);
		}
	});

	await Promise.all(
		uniqueCountries.map(async (countryName) => {
			if (!flags.has(countryName)) {
				const flagUrl = await getCountryFlag(countryName);
				flags.set(countryName, flagUrl);
			}
		})
	);

	return flags;
}
