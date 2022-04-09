import styled from "styled-components";

const MasterContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  height: 880px;
  background-color: ${(props) => props.theme.panel};
  position: relative;
  h4 {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    font-size: ${(props) => props.theme.fontSize.large};
    margin: 0 auto;
    width: 80%;
    padding: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.background};
  }
  h6 {
    background-color: ${(props) => props.theme.contrastPanel.bg};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.contrastPanel.color};
    margin: 0 auto;
    width: 60%;
    padding: 10px;
    border-radius: 8px;
  }
  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
  }
  .delete-pec-cta {
    position: absolute;
    left: 10px;
    top: 40px;
    font-size: ${(props) => props.theme.fontSize.medium};
    color: white;
    border: 1px solid red;
    padding: 10px;
    background-color: red;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.footer.bg};
  width: 100%;
  height: 100px;
`;
const BackButtonWrapper = styled.div`
  span {
    font-size: 48px;
    color: ${(props) => props.theme.footer.color};
    cursor: pointer;
  }
  position: absolute;
  left: 10px;
  width: 90px;
  height: 100px;
  line-height: 100px;
`;
const PecEdit = styled.div`
  color: #76ff03;
  font-size: 48px;
  position: absolute;
  left: 20%;
  cursor: pointer;
`;
const SoundPlay = styled.div`
  button {
    font-size: 56px;
    color: #18ffff;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const AddToFavs = styled.div`
  position: absolute;
  right: 10px;
  width: 90px;
  font-size: 48px;
  color: white;
  cursor: pointer;
  .fav-pec {
    color: red;
  }
`;

export {
  MasterContainer,
  FooterSection,
  PecEdit,
  SoundPlay,
  AddToFavs,
  BackButtonWrapper,
};
