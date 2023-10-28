import React from "react";
import styled from "styled-components";
import JobLang from "./JobLang";

const Ul = styled.ul`
	list-style-type: none;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: end;
	align-items: center;
`;

export default function JobLangs({ languages }) {
	return (
		<Ul>
			{languages.map((language) => (
				<JobLang key={Math.random()} language={language} />
			))}
		</Ul>
	);
}
