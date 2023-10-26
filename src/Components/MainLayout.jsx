import styled from "styled-components";
import desktopBg from "../assets/images/bg-header-desktop.svg";
import mobileBg from "../assets/images/bg-header-mobile.svg";
import JobBoard from "./JobBoard/JobBoard";

const InnerRoot = styled.div`
	background-color: ${(props) => props.theme.colors.background};
	min-height: 100vh;
`;

const Header = styled.header`
	height: 200px;
	background-image: url(${desktopBg});
	background-size: cover;
	background-position: center;
	background-color: ${(props) => props.theme.colors.primary};
	@media (max-width: ${(props) => props.theme.media.tablet}) {
		background-image: url(${mobileBg});
	}
`;

const Main = styled.main`
	max-width: 1260px;
	padding-left: 15px;
	padding-right: 15px;
	display: grid;
	margin: auto;
`;

export default function MainLayout(props) {
	return (
		<InnerRoot>
			<Header />
			<Main>
				<JobBoard />
				{/* <LayOut /> */}
			</Main>
		</InnerRoot>
	);
}
