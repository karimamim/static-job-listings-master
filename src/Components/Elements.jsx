import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const P = styled.p`
  color: hsl(180, 8%, 52%);
  font-size: 15px;
`;

export const Button = styled.button`
  border: none;
  color: hsl(180, 29%, 50%);
  background-color: transparent;
  margin-right: 10px;
  font-size: 15px;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: #fff;
  }
`;
export const Img = styled.img`
  @media (max-width: 768px) {
    position: absolute;
    transform: translate(-188%, -100%);
  }
`;
