import styled from "styled-components";

const MasterContainer = styled.div`
  width: 100%;
  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 18px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    cursor: pointer;
    &:disabled {
      opacity: 0.4;
    }
  }
`;

export default MasterContainer;
