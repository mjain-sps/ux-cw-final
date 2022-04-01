import styled from "styled-components";

const MasterHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  border: 1px solid black;
  position: relative;
  img {
    position: absolute;
    left: 10px;
    height: 58px;
    top: 1px;
    width: 58px;
    border-radius: 50%;
  }
  h4 {
    text-align: center;
    padding: 0;
    margin: 0;
    height: 60px;
    line-height: 60px;
    width: 100%;
  }
`;

export { MasterHeader };
