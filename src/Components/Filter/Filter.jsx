import styled from "styled-components";
import Chips from "./Chips";
import { useLocalContext } from "../../Context/Context";

const Ul = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 20px 30px;
	border-radius: 3px;
	background-color: #fff;
	display: flex;
	gap: 15px;
`;

const Placeholder = styled.div`
	height: 68px;
	margin-top: -2rem;
`;

export default function Filter() {
	const { terms } = useLocalContext();

	return (
		<Placeholder>
			{terms.length > 0 && (
				<Ul>
					{terms.map((tag) => (
						<Chips key={Math.random()} tag={tag} />
					))}
				</Ul>
			)}
		</Placeholder>
	);
}
