import styled, { useTheme } from "styled-components";
import desktopBg from "../assets/images/bg-header-desktop.svg";
import LayOut from "./JobBoard/LayOut";
import mobileBg from "../assets/images/bg-header-mobile.svg";

export default function MainLayout(props) {
	const theme = useTheme();

	const InnerRoot = styled.div`
		background-color: ${(props) => props.theme.colors.background};
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
		display: grid;
		margin: auto;
		background-color: ${(props) => props.theme.colors.background};
	`;

	return (
		<InnerRoot theme={theme}>
			<Header theme={theme} />
			<Main>
				<LayOut />
			</Main>
		</InnerRoot>
	);
}
