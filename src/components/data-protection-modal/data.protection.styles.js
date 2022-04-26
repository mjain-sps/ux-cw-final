import styled from "styled-components";

const MasterContainer = styled.div`
  width: 100%;
  height: 1024px;
  background-color: rgba(125, 125, 125, 0.4);
  display: flex;
`;

const ModalContentContainer = styled.div`
  width: 80%;
  margin: 40px auto 0 auto;
  height: 800px;
  padding: 10px;
  background-color: ${(props) => props.theme.background};
  h3 {
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.oppositeColor};
    text-align: center;
  }
  h6 {
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.oppositeColor};
    text-align: center;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.oppositeColor};
    padding: 0 20px;
  }
`;
const ConfirmationBox = styled.div`
  width: 150px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 20px;
  span {
    font-size: ${(props) => props.theme.fontSize.medium};
    cursor: pointer;
  }
`;
export { MasterContainer, ModalContentContainer, ConfirmationBox };
