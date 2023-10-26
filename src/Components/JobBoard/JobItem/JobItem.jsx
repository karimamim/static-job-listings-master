import styled from "styled-components";
import CompanyLogo from "./CompanyLogo";
import JobDetails from "./JobDetails";

const Li = styled.li`
	background-color: #fff;
	padding: 20px 25px;
	margin-bottom: 20px;
	border-radius: 5px;
	box-shadow: hsl(180deg 29% 50% / 57%) 5px 5px 20px 0;
	display: grid;
	grid-template-columns: 100px auto auto;
	gap: 20px;
`;

export default function JobItem({ jobDetails }) {
	return (
		<Li>
			<CompanyLogo logoUrl={jobDetails.logo} />
			<JobDetails details={jobDetails} />
			<ul>
				{jobDetails.languages.map((language) => (
					<li>{language}</li>
				))}
			</ul>
		</Li>
	);
}
