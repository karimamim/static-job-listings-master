import styled from "styled-components";

const Div = styled.div`
	display: flex;
`;

export default function JobInfoWrapper({ children }) {
	return <Div>{children}</Div>;
}
