import styled, { useTheme } from "styled-components";
import CompanyLogo from "./CompanyLogo";
import JobDetails from "./JobDetails/JobDetails";
import JobLangs from "./JobLangs/JobLangs";

const Li = styled.li`
	background-color: #fff;
	padding: 20px 25px;
	margin-bottom: 20px;
	border-radius: 5px;
	box-shadow: hsl(180deg 29% 50% / 57%) 5px 5px 20px 0;
	display: grid;
	grid-template-columns: 100px auto auto;
	gap: 20px;
	border-left: ${(props) => props.border};
`;

export default function JobItem({ jobDetails }) {
	const theme = useTheme();

	const border = jobDetails.featured ? `${theme.colors.primary} 5px solid` : "";

	return (
		<Li border={border}>
			<CompanyLogo logoUrl={jobDetails.logo} alt={jobDetails.company} />
			<JobDetails details={jobDetails} />
			<JobLangs languages={jobDetails.languages} />
		</Li>
	);
}
