import styled from "styled-components";

interface SortProps {
	isActive?: boolean;
}

const Container = styled.div`
	padding: 20px;
	background-color: ${(props) => props.theme.colors.white};
`;

const Title = styled.h1`
	font-size: 36px;
	font-weight: bold;
	margin: 20px 0;
`;

const SortOptions = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

const SortTitle = styled.div`
	margin-right: 35px;
	font-size: 28px;
	font-weight: 500;
`;

const SortValue = styled.div<SortProps>`
	font-size: 22px;
	margin-right: 15px;
	cursor: pointer;
	${({ isActive }: any) =>
		isActive &&
		`
    text-decoration: underline;
  `}
	user-select: none;
	&:hover {
		color: ${(props) => props.theme.colors.blue};
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
	grid-gap: 1.5rem;
	row-gap: 40px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const ServerCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ServerName = styled.div`
	font-weight: 500;
	font-size: 22px;
	margin-bottom: 4px;
`;

const ServerDistance = styled.div`
	font-size: 20px;
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
	font-size: 66px;
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
};
