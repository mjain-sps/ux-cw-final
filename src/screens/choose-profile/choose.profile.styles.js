import styled from "styled-components";

const MasterContainer = styled.div``;

const TopCTAPanel = styled.div`
  background-color: ${(props) => props.theme.similarShadeDarkPanel};
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
  margin-bottom: 10px;
`;
const CTACapsule = styled.div`
  background-color: ${(props) => props.theme.oppositeColor};
  border: 1px solid ${(props) => props.theme.oppositeColor};
  border-radius: 8px;
  width: 170px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.background};
  cursor: pointer;
  p {
    color: ${(props) => props.theme.background};
    margin: 0;
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;
const ChooseProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme.panel};
  height: calc(1024px - 100px);
  padding: 20px;
`;

const ProfileCards = styled.div`
  width: 290px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid rgba(125, 125, 125, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  cursor: pointer;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid ${(props) => props.theme.oppositeColor};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.medium};
    margin: 10px 0;
    color: ${(props) => props.theme.text};
  }
  span {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.text};
  }
`;

export {
  ProfileCards,
  ChooseProfileWrapper,
  TopCTAPanel,
  MasterContainer,
  CTACapsule,
};
