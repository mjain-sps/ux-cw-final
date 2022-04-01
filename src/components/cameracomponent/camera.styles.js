import styled from "styled-components";

const MasterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .close-camera {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

const CameraActionPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CameraInnerButton = styled.div`
  background-color: red;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 25px auto;
  outline: 1px solid white;
  outline-offset: 1px;
  cursor: pointer;
`;

const ImagePreview = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 100px;
  width: 100px;
  z-index: 20;
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;

const ImagePreviewCTAPanel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 15;
  width: 100%;
  height: 100px;
  background-color: #ecffdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteImageIconWrapper = styled.div`
  color: red;
  font-size: 30px;
  z-index: 20;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;
const AcceptImageIconWrapper = styled.div`
  color: green;
  font-size: 30px;
  z-index: 20;
  width: 50%;
  text-align: center;
  cursor: pointer;
`;
export {
  MasterContainer,
  CameraActionPanel,
  CameraInnerButton,
  ImagePreview,
  ImagePreviewCTAPanel,
  DeleteImageIconWrapper,
  AcceptImageIconWrapper,
};
