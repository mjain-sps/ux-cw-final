import styled from "styled-components";

const MasterContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 800px;
  background-color: ${(props) => props.theme.panel};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 30px 20px;
  flex-wrap: wrap;
  gap: 30px;
`;

const AdminPanelInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.contrastPanel.bg};
  color: ${(props) => props.theme.contrastPanel.color};
  border: 1px solid ${(props) => props.theme.oppositeColor};
  border-radius: 8px;
  height: 200px;
  width: 250px;
  h4 {
    font-size: ${(props) => props.theme.fontSize.medium};
    margin: 10px 0;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.small};
    margin: 10px 0;
  }
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 20px;
  left: 20px;
  border: 1px solid ${(props) => props.theme.oppositeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  .go-back {
    font-size: 32px;
  }
`;
export { MasterContainer, AdminPanelInfoCard, BackButtonWrapper };
