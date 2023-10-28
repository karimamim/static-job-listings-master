import React from "react";
import styled from "styled-components";

const LangUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: end;
`;

const Button = styled.button`
  border: none;
  background-color: hsl(180deg 37.51% 92.44%);
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 15px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.colors.filterTablets};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
function JobLang({ languages }) {
  return (
    <LangUl>
      {languages.map((language) => (
        <li key={Math.random()}>
          <Button>{language}</Button>
        </li>
      ))}
    </LangUl>
  );
}

export default JobLang;
