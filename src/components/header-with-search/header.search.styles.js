import styled from "styled-components";
const MasterContainer = styled.div`
  width: 100%;
  height: 75px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: #ffcc80;
`;

const Logo = styled.div`
  width: 100px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

export { MasterContainer, Logo };
