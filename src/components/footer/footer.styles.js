import styled from "styled-components";

const MasterContainer = styled.div`
  height: 80px;
  width: 100%;
  padding: 2px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const BackButtonContainer = styled.div`
  width: 40px;
  height: 100%;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
`;

const ChooseProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const AddPecContainer = styled.div`
  width: 60px;
  height: 100%;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
`;
export {
  MasterContainer,
  BackButtonContainer,
  ChooseProfileContainer,
  AddPecContainer,
};
