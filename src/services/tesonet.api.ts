import axios, { AxiosResponse } from "axios";
import Server from "../common/types";

const loginUrl = "https://playground.tesonet.lt/v1/tokens";
const serversUrl = "https://playground.tesonet.lt/v1/servers";

interface LoginResponse {
	token: string;
}

type ServersResponse = Server[];

const login = async (username: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
	const response = await axios.post(loginUrl, {
		username,
		password,
	});

	return response;
};

const getServers = async (token: string): Promise<AxiosResponse<ServersResponse>> => {
	const response = await axios.get(serversUrl, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return response;
};

const API = {
	login,
	getServers,
};

export default API;
