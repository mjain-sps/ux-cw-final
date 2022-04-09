import styled from "styled-components";
const StudenPaneWrapper = styled.div`
  border: 1px solid black;
  margin: 10px 0px;
  background-color: ${(props) => props.theme.panel};
  h4 {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.background};
    padding: 10px;
    border-radius: 8px;
  }
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

const MasterContainerPecLevel3 = styled.div`
  height: 150px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const SectionForPecLevel3 = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  img {
    height: 100%;
    width: 100px;
    object-fit: contain;
  }
`;
export {
  MasterContainerPecLevel1,
  MasterContainerPecLevel3,
  SectionForPecLevel3,
  StudenPaneWrapper,
};
