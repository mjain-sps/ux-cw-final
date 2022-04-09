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
  background-color: ${(props) => props.theme.footer.bg};
`;
const BackButtonContainer = styled.div`
  width: 90px;
  height: 100%;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
  font-size: 48px;
  color: ${(props) => props.theme.footer.color};
`;

const ChooseProfileContainer = styled.div`
  width: 100%;
  height: 80px;
  cursor: pointer;
  select {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.footer.color};
    margin-top: 20px;
    padding: 0 20px;
    font-size: ${(props) => props.theme.fontSize.medium};
    background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png")
      no-repeat right ${(props) => props.theme.footer.color};
    -webkit-appearance: none;
    background-position-x: 544px;
  }
`;

const AddPecContainer = styled.div`
  width: 90px;
  height: 100%;
  text-align: center;
  line-height: 80px;
  cursor: pointer;
  font-size: 40px;
  color: #00e676;
`;
export {
  MasterContainer,
  BackButtonContainer,
  ChooseProfileContainer,
  AddPecContainer,
};
