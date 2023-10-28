import styled from "styled-components";
import { useLocalContext } from "../../../../Context/Context";

const Li = styled.li`
	background-color: hsl(180deg 37.51% 92.44%);
	color: ${(props) => props.theme.colors.primary};
	padding: 10px 15px 8px 15px;
	border-radius: 5px;
	font-weight: 700;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	&:hover {
		color: ${(props) => props.theme.colors.filterTablets};
		background-color: ${(props) => props.theme.colors.primary};
	}
`;

export default function JobLang({ language }) {
	const { terms, setTerms } = useLocalContext();

	const handleClick = (language) => {
		if (!terms.includes(language)) {
			setTerms([...terms, language]);
		}
	};

	return <Li onClick={(e) => handleClick(language)}>{language}</Li>;
}
