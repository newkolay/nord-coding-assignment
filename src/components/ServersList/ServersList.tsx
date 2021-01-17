import { useContext, useEffect, useState } from "react";
import Server from "../../common/types";
import API from "../../services/api";
import { store } from "../../store/store";

function ServersList() {
	const {
		state: { token },
	} = useContext(store);
	const [list, setList] = useState<Server[]>([]);

	useEffect(() => {
		async function getResults() {
			if (token) {
				const response = await API.getServers(token);
				setList(response.data);
			}
		}

		getResults();
	}, []);

	return (
		<div>
			{list.map((value) => (
				<div>
					<div>{value.name}</div>
					<div>{value.distance}</div>
				</div>
			))}
		</div>
	);
}

export default ServersList;
