import styled from "styled-components";

export default function JobDetails({ details }) {
	return (
		<div>
			<div>
				<div>{details.company}</div>
				{details.new && <div>New!</div>}
				{details.featured && <div>Featured</div>}
			</div>
			<h2>{details.position}</h2>
			<div></div>
		</div>
	);
}
