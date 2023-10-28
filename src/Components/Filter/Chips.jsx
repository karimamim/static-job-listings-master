import styled from "styled-components";
import iconRemove from "../../assets/images/icon-remove.svg";
import { useLocalContext } from "../../Context/Context";

const Li = styled.li`
	background-color: hsl(180deg 37.51% 92.44%);
	color: ${(props) => props.theme.colors.primary};
	border-radius: 3px;
	font-weight: 700;
	cursor: pointer;
	transition: 0.2s ease-in-out;
	display: flex;
`;

const Span = styled.span`
	padding: 8px 10px 5px 10px;
	display: block;
`;

const Button = styled.button`
	border: none;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	padding: 3px 6px;
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.primary};
	transition: 0.2s ease-in-out;
	&:hover {
		background-color: ${(props) => props.theme.colors.veryDarkGrayishCyan};
	}
`;

export default function Chips({ tag }) {
	const { terms, setTerms } = useLocalContext();

	const handleClick = (tag) => {
		let newTerms = terms.filter((e) => tag !== e);

		setTerms(newTerms);
	};

	return (
		<Li>
			<Span>{tag}</Span>
			<Button onClick={() => handleClick(tag)}>
				<img src={iconRemove} alt="Icon Remove" />
			</Button>
		</Li>
	);
}
