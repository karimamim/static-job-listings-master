import styled from "styled-components";
import ContractInfo from "./ContractInfo";

const Div = styled.div`
	display: flex;
	margin-top: 15px;
`;

export default function JobContract({ postedAt, contract, location }) {
	return (
		<Div>
			<ContractInfo text={postedAt} />
			<ContractInfo text={contract} />
			<ContractInfo text={location} />
		</Div>
	);
}
