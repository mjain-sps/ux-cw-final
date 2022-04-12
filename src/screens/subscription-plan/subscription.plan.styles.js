import styled from "styled-components";

const MasterContainer = styled.div`
  width: 100%;
  height: 100vh;
  h1,
  h4,
  h2,
  h6 {
    text-align: center;
  }
`;
const SubscritionPlanCardWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const SubscritionPlanCard = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid rgba(125, 125, 125, 0.6);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  p {
    margin: 0;
  }
  .subscription-card--header {
    width: 100%;
    padding: 10px;
    background-color: #13294b;
    color: wheat;
    h4,
    h5 {
      text-align: center;
    }
  }
  .standard {
    background-color: #067a46;
  }
  button {
    width: 80%;
    margin: auto;
    background-color: #26c281;
    color: black;
    cursor: pointer;
  }
`;
const BackButtonContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: 1px solid black;
`;
export {
  SubscritionPlanCard,
  SubscritionPlanCardWrapper,
  MasterContainer,
  BackButtonContainer,
};
