import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Server from "../../common/types";
import getFlags from "../../services/countries.api";
import API from "../../services/tesonet.api";
import { store } from "../../store/store";
import { RemoveToken } from "../../store/store.actions";
import parseCountryName from "../../utils/parse-country-name";
import sortByProperty from "../../utils/sort-by-property";
import {
	Container,
	Title,
	SortOptions,
	SortTitle,
	SortValue,
	ListWrapper,
	Servers,
	ServerCard,
	ServerName,
	ServerDistance,
	ServerImage,
	LoadingText,
	LogOut,
} from "./styles";

const name = "name";
const distance = "distance";

function ServersList() {
	const {
		dispatch,
		state: { token },
	} = useContext(store);
	const history = useHistory();

	const [isLoaded, setIsLoaded] = useState(false);
	const [servers, setServers] = useState<Server[]>([]);
	const [flags, setFlags] = useState<Map<string, string>>();
	const [activeSort, setActiveSort] = useState("");

	useEffect(() => {
		async function getResults() {
			if (token) {
				const response = await API.getServers(token);
				setFlags(await getFlags(response.data));
				setServers(response.data);
				setIsLoaded(true);
			} else {
				history.push("/");
			}
		}
		getResults();
	}, [history, token]);

	const isActiveSort = (sort: string) => activeSort === sort || activeSort === `-${sort}`;
	const getSortArrow = (sort: string) =>
		activeSort === sort ? "⬆" : activeSort === `-${sort}` ? "⬇" : "";

	const sortList = (sortCondition: string) => {
		let currentSort = "";
		if (!activeSort || activeSort !== sortCondition) {
			currentSort = sortCondition;
		} else if (activeSort.includes("-")) {
			currentSort = activeSort.substr(1);
		} else {
			currentSort = `-${sortCondition}`;
		}
		setActiveSort(currentSort);
		const sortedServers = [...servers].sort(sortByProperty(currentSort));
		setServers(sortedServers);
	};

	const logOut = () => {
		localStorage.removeItem("token");
		dispatch(RemoveToken());
	};

	return (
		<Container>
			<LogOut onClick={logOut}>Log Out</LogOut>
			<Title>Servers</Title>
			<SortOptions>
				<SortTitle>Sort by:</SortTitle>
				<SortValue isActive={isActiveSort(name)} onClick={() => sortList(name)}>
					Name {getSortArrow(name)}
				</SortValue>
				<SortValue onClick={() => sortList(distance)} isActive={isActiveSort(distance)}>
					Distance
					{getSortArrow(distance)}
				</SortValue>
			</SortOptions>
			{isLoaded ? (
				<ListWrapper>
					<Servers>
						{servers.map((server) => (
							<ServerCard key={server.name + server.distance}>
								{flags && (
									<ServerImage>
										<img
											src={flags.get(parseCountryName(server.name))}
											alt={server.name}
										/>
									</ServerImage>
								)}
								<ServerName>{server.name}</ServerName>
								<ServerDistance>{server.distance} km</ServerDistance>
							</ServerCard>
						))}
					</Servers>
				</ListWrapper>
			) : (
				<LoadingText>Loading Data...</LoadingText>
			)}
		</Container>
	);
}

export default ServersList;
