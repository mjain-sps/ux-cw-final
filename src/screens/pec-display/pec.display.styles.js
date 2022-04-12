import styled from "styled-components";

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.background};

  position: relative;
  h4 {
    text-align: center;
    margin: 8px;
    color: ${(props) => props.theme.oppositeColor};
    font-size: ${(props) => props.theme.fontSize.large};
  }
  .pec_card {
    width: 145px;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => props.theme.background};
    position: relative;
    cursor: pointer;

    h4 {
      text-align: center;
      margin: 5px 0px;
      background-color: ${(props) => props.theme.similarShadeDarkPanel};
      color: ${(props) => props.theme.oppositeColor};
      font-size: ${(props) => props.theme.fontSize.small};
      width: 100%;
      margin: 0;
      padding: 10px;
    }
    img {
      width: 145px;
      height: 145px;
      object-fit: contain;
    }
    p {
      background-color: ${(props) => props.theme.contrastPanel.bg};
      color: ${(props) => props.theme.contrastPanel.color};
      margin: 0;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 0px;
      padding: 4px;
    }
  }
`;
const MainPecsDisplaySection = styled.div`
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  background-color: ${(props) => props.theme.panel};
  padding: 10px;
`;

const PecDisplayPanelHeader = styled.div`
  h4 {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.oppositeColor};
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }
`;

const PecDisplayCard = styled.div`
  width: 145px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  position: relative;
  cursor: pointer;

  h4 {
    text-align: center;
    margin: 5px 0px;
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    color: ${(props) => props.theme.oppositeColor};
    width: 100%;
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.small};
    padding: 10px;
  }
  img {
    width: 145px;
    height: 145px;
    object-fit: contain;
  }
  p {
    background-color: ${(props) => props.theme.contrastPanel.bg};
    color: ${(props) => props.theme.contrastPanel.color};
    margin: 0;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    padding: 4px;
  }
`;

const InteractiveModeWrapper = styled.div`
  height: 230px;
  width: 100%;
  border: 1px solid black;
  #div1 {
    height: 230px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px;
    div {
      border: 1px solid green;
    }
  }
`;
const IWantPecWrapper = styled.div`
  width: 145px;
  height: 210px;
  img {
    width: 145px;
    height: 145px;
    object-fit: contain;
  }
`;
const PecDisplayCardInteractive = styled.div`
  width: 145px;
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  position: relative;
  cursor: pointer;
  .close-card {
    position: absolute;
    top: 2px;
    left: 0px;
    font-size: 20px;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin: 5px 0px;
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    color: ${(props) => props.theme.background};
    width: 100%;
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.small};
    padding: 10px;
  }
  img {
    width: 145px;
    height: 145px;
    object-fit: contain;
  }
  p {
    background-color: ${(props) => props.theme.contrastPanel.bg};
    color: ${(props) => props.theme.contrastPanel.color};
    margin: 0;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0px;
    padding: 4px;
  }
`;

const PlayInteractiveTrainWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  .play-icon {
    color: #76ff03;
    font-size: 56px;
  }
`;
export {
  PecDisplayCard,
  MainPecsDisplaySection,
  MasterContainer,
  PecDisplayPanelHeader,
  InteractiveModeWrapper,
  PecDisplayCardInteractive,
  IWantPecWrapper,
  PlayInteractiveTrainWrapper,
};
