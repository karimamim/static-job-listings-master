import styled, { useTheme } from "styled-components";
/* color: ${(props) => props.theme.colors.veryDarkGrayishCyan};
	&:hover {
		color: ${(props) => props.theme.colors.filterTablets}; */
/* } */

function PositionWrapper(props) {
	const theme = useTheme();
	const H2 = styled.h2`
		color: ${(props) => props.theme.colors.veryDarkGrayishCyan};
	`;
	return <H2>{props.children}</H2>;
}

export default PositionWrapper;
