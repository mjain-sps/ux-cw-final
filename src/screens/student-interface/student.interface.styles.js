import styled from "styled-components";

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.panel};
  height: 100vh;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  height: 50px;
  padding: 0 10px;
  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid ${(props) => props.theme.oppositeColor};
    border-radius: 5px;
    height: 40px;
    padding: 0 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.oppositeColor};
    color: ${(props) => props.theme.background};
  }
`;

const QuickActionPanel = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const FavouritesPanel = styled.div`
  width: 100%;
  height: 220px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const MainPanel = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const MasterContainerPecLevel1 = styled.div`
  height: 150px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  img {
    height: 100%;
    width: 150px;
    object-fit: contain;
    border: 1px solid rgba(125, 125, 125, 0.3);
    background-color: ${(props) => props.theme.background};
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

const TitleContainer = styled.div`
  background-color: ${(props) => props.theme.similarShadeDarkPanel};
  margin: 10px;
  h4 {
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.text};
    text-align: center;
    padding: 10px;
    margin: 0;
  }
`;
export {
  MainPanel,
  FavouritesPanel,
  QuickActionPanel,
  MasterContainer,
  HeaderContainer,
  PecDisplayCard,
  MasterContainerPecLevel1,
  TitleContainer,
};
