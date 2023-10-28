import styled from "styled-components";

const Div = styled.div`
	margin-right: 10px;
	color: ${(props) => props.theme.colors.darkGrayishCyan};
`;
export default function ContractInfo({ text }) {
	return <Div>{text}</Div>;
}
