import styled from "styled-components";

interface SortProps {
	isActive?: boolean;
}

const Container = styled.div`
	padding: 20px;
	background-color: ${(props) => props.theme.colors.white};
`;

const Title = styled.h1`
	margin: 20px 0;
	font-size: 2.25rem;
	font-weight: bold;
`;

const SortOptions = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const SortTitle = styled.div`
	margin-right: 35px;
	font-size: 1.75rem;
	font-weight: 500;
`;

const SortValue = styled.div<SortProps>`
	font-size: 1.375rem;
	margin-right: 15px;
	cursor: pointer;
	${({ isActive }: any) =>
		isActive &&
		`
    text-decoration: underline;
  `}
	user-select: none;
	&:hover {
		color: ${(props) => props.theme.colors.blueDark};
	}
`;

const ListWrapper = styled.div`
	padding: 20px;
	background-color: ${(props) => props.theme.colors.grey};
	border-radius: 25px;
`;

const Servers = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	column-gap: 1.5rem;
	row-gap: 2.5rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ServerCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ServerName = styled.div`
	font-weight: 500;
	font-size: 1.375rem;
	margin-bottom: 4px;
`;

const ServerDistance = styled.div`
	font-size: 1.25rem;
`;

const ServerImage = styled.div`
	img {
		height: 40px;
	}
	margin-bottom: 5px;
`;

const LoadingText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 4rem;
`;

const LogOut = styled.button`
	position: absolute;
	right: 20px;
	border: none;
	outline: none;
	background-color: ${(props) => props.theme.colors.white};
	font-size: 1.5rem;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
`;

export {
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
};
