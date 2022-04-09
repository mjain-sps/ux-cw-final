import styled from "styled-components";

const MasterContainer = styled.div`
  background-color: #dddddd;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  .close-modal {
    position: absolute;
    font-size: 32px;
    left: 10px;
    top: 10px;
    cursor: pointer;
  }
`;
const ModalImageContainer = styled.div`
  width: 90%;
  height: 80%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export { MasterContainer, ModalImageContainer };
