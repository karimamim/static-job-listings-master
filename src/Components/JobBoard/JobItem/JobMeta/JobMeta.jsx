import styled, { useTheme } from "styled-components";
import Company from "./Company";
import Label from "./Label";

const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default function JobMeta({ isFeatured, isNew, company }) {
  const theme = useTheme();
  return (
    <MetaWrapper>
      <Company company={company} />

      {isNew && <Label text="new!" bg={theme.colors.primary} />}
      {isFeatured && (
        <Label text="featured" bg={theme.colors.veryDarkGrayishCyan} />
      )}
    </MetaWrapper>
  );
}
