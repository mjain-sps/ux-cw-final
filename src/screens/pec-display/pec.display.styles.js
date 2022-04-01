import styled from "styled-components";
const MainPecsDisplaySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;

const PecDisplayCard = styled.div`
  width: 125px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h4 {
    text-align: center;
    margin: 5px 0px;
  }
  img {
    width: 125px;
    height: 125px;
    object-fit: contain;
  }
  p {
    margin: 0;
  }
`;

export { PecDisplayCard, MainPecsDisplaySection };
