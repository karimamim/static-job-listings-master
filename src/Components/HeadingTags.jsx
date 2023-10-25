import styled from "styled-components";

export const H2 = styled.h2`
  color: hsl(180, 14%, 20%);
  font-size: 20px;
  font-weight: 500;
  margin-left: ${(props) => props.marginLeft};
  &:hover {
    color: hsl(180, 29%, 50%);
  }
`;

export const H3 = styled.h3`
  background-color: ${(props) => props.bg};
  color: white;
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 14px;
`;
