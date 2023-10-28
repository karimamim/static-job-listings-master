import styled from "styled-components";
import JobItem from "./JobItem/JobItem";
import { useLocalContext } from "../../Context/Context";

const Ul = styled.ul`
	list-style: none;
	padding-top: 40px;
	padding-bottom: 40px;
`;

export default function JobBoard() {
	const { terms, jobItems } = useLocalContext();

	const isCommon = (languages) => {
		let newArr = terms.filter((term) => languages.includes(term));

		return newArr.length > 0;
	};

	const getFiltered = () => {
		return jobItems.filter((item) => {
			return isCommon(item.languages);
		});
	};

	const filteredItems = terms.length < 1 ? jobItems : getFiltered();

	return (
		<Ul>
			{filteredItems.map((jobDetails) => (
				<JobItem key={Math.random()} jobDetails={jobDetails} />
			))}
		</Ul>
	);
}
