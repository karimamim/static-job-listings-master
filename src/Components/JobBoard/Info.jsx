import styled from "styled-components";

const Div = styled.div`
	display: flex;
	gap: 20px;
	justify-content: space-between;
`;

function Info({ children }) {
	return <Div>{children}</Div>;
}

export default Info;
