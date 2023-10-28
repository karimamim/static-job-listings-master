import styled from "styled-components";

const Div = styled.div`
	font-size: 14px;
	font-weight: 700;
	color: ${(props) => props.theme.colors.filterTablets};
	background-color: ${(props) => props.background};
	padding: 5px 8px 4px 8px;
	border-radius: 15px;
	text-transform: uppercase;
`;

export default function Label({ text, background }) {
	return <Div background={background}>{text}</Div>;
}
