import styled from "styled-components";

const MetaWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Meta = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  padding: 5px 8px;
  border-radius: 15px;
`;

export default function JobMeta({ isFeatured, isNew, company }) {
  return (
    <MetaWrapper>
      <Meta color={(props) => props.theme.colors.primary} bg="transparent">
        {company}
      </Meta>
      {isNew && (
        <Meta
          color={(props) => props.theme.colors.filterTablets}
          bg={(props) => props.theme.colors.primary}
        >
          New!
        </Meta>
      )}
      {isFeatured && (
        <Meta color={(props) => props.theme.colors.filterTablets} bg="black">
          FEATURED
        </Meta>
      )}
    </MetaWrapper>
  );
}
