import styled from "styled-components";

const MasterContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(125, 125, 125, 0.4);
  display: flex;
  justify-content: center;
  align-self: center;
  z-index: 25;
`;
const ModalBox = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  border: 1px solid white;
  background-color: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .close-small-modal {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 20px;
    cursor: pointer;
  }
  h4 {
    margin: 40px 0;
  }
  span {
    width: 60px;
    border: 1px solid black;
    padding: 10px 20px;
    text-align: center;
    background-color: green;
    color: white;
    cursor: pointer;
    display: inline-block;
    margin: 0 10px;
  }
`;
export { ModalBox, MasterContainer };
