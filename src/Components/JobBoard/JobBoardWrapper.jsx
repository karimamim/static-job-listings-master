import styled, { useTheme } from "styled-components";

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: end;
	width: 100%;
	margin-bottom: 30px;
`;

export default function JobBoardWrapper({ children }) {
	return <Div>{children}</Div>;
}
