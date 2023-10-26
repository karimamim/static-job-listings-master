import JobBoardWrapper from "./JobBoardWrapper";
import { ContentWrapper } from "./ContentWrapper";
import Info from "./Info";
import JobInfoWrapper from "./JobInfoWrapper";
import PositionWrapper from "./PositionWrapper";
import data from "../../lib/data";

function LayOut() {
	return (
		<ContentWrapper>
			{data.map((user) => {
				return (
					<JobBoardWrapper>
						<JobInfoWrapper>
							<img src={user.logo} alt={user.company} key={Math.random()} />
							<div>
								<Info>
									<h2>{user.company}</h2>
									<h3>{user.new ? "new" : ""}</h3>
									<h3>{user.featured ? "FEATURED" : ""}</h3>
								</Info>
								<PositionWrapper>{user.position}</PositionWrapper>
								<div>
									<p>{user.postedAt}</p>
									<p>{user.contract}</p>
									<p>{user.location}</p>
								</div>
							</div>
						</JobInfoWrapper>
						<div>
							{user.languages.map((language) => {
								return <button>{language}</button>;
							})}
						</div>
					</JobBoardWrapper>
				);
			})}
		</ContentWrapper>
	);
}

export default LayOut;
