import styled from "styled-components";

const ContractWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Contract = styled.div`
  margin-right: 10px;
  color: ${(props) => props.theme.colors.darkGrayishCyan};
`;

export default function JobContract({ postedAt, contract, location }) {
  return (
    <ContractWrapper>
      <Contract>{postedAt}</Contract>
      <Contract>{contract}</Contract>
      <Contract>{location}</Contract>
    </ContractWrapper>
  );
}
