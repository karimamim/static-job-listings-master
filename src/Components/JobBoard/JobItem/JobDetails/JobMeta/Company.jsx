import styled from "styled-components";

const Div = styled.div`
	font-size: 16px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.primary};
`;

export default function Company({ company }) {
	return <Div>{company}</Div>;
}
