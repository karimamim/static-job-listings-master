import styled from "styled-components";
import JobMeta from "./JobMeta/JobMeta";
import JobContract from "./JobContract";

const Title = styled.h2`
  color: ${(props) => props.theme.colors.veryDarkGrayishCyan};
  transition: 0.1s ease-in-out;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default function JobDetails({ details }) {
  return (
    <div>
      <JobMeta
        isFeatured={details.featured}
        isNew={details.new}
        company={details.company}
      />
      <Title>{details.position}</Title>

      <JobContract
        postedAt={details.postedAt}
        contract={details.contract}
        location={details.location}
      />
    </div>
  );
}
