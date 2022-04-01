import styled from "styled-components";
const MasterContainer = styled.div`
  width: 100%;
  height: 75px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  width: 100px;
  height: 75px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export { MasterContainer, Logo };
