import styled, { useTheme } from "styled-components";
import Company from "./Company";
import Label from "./Label";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export default function JobMeta({ isFeatured, isNew, company }) {
	const theme = useTheme();

	return (
		<Wrapper>
			<Company company={company} />
			{isNew && <Label text="New!" background={theme.colors.primary} />}
			{isFeatured && (
				<Label text="Featured" background={theme.colors.veryDarkGrayishCyan} />
			)}
		</Wrapper>
	);
}
