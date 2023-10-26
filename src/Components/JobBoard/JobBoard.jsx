import styled from "styled-components";
import data from "../../lib/data";
import JobItem from "./JobItem/JobItem";
import { useEffect, useState } from "react";

const Ul = styled.ul`
	list-style: none;
	padding-top: 80px;
	padding-bottom: 40px;
`;

export default function JobBoard() {
	const [jobItems, setJobItems] = useState([]);

	useEffect(() => {
		setJobItems(data);
	}, []);

	console.log(jobItems);

	return (
		<Ul>
			{jobItems.map((jobDetails) => (
				<JobItem key={Math.random()} jobDetails={jobDetails} />
			))}
		</Ul>
	);
}
