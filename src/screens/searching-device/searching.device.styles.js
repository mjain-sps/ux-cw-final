import styled from "styled-components";

const MasterContainer = styled.div`
  background-color: #ffaea1;
  position: absolute;
  top: 0;
  left: 0;
  width: 768px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .close-search-device-modal {
    position: absolute;
    left: 30px;
    top: 20px;
    font-size: 56px;
    cursor: pointer;
    border: 1px solid black;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
`;

const SearchScreenModal = styled.div`
  width: 300px;
  height: 300px;
  padding: 20px;
  background-color: #f0f1f3;
  h4 {
    margin: 0;
    text-align: center;
  }
  p {
    text-align: center;
    cursor: pointer;
  }
`;

export { MasterContainer, SearchScreenModal };
