import styled from "styled-components";

const Div = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.filterTablets};
  background-color: ${(props) => props.bg};
  padding: 5px 8px;
  border-radius: 15px;
  text-transform: uppercase;
`;

export default function Label({ text, bg }) {
  return <Div bg={bg}>{text}</Div>;
}
