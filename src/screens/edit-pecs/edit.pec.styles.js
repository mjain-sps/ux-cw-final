import styled from "styled-components";

const MasterContainer = styled.div`
  border-radius: 5px;
  padding: 30px 20px;
  background-color: ${(props) => props.theme.panel};
  position: relative;
  h4 {
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
    margin: 20px;
    color: ${(props) => props.theme.text};
  }
  width: 80%;
  padding: 10px 20px;
  height: 1000px;
  border-radius: 5px;
  margin: 20px auto;
  button {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize.medium};
    border: 2px solid ${(props) => props.theme.oppositeColor};
  }
`;

const InputGroupContainer = styled.div`
  margin: 40px 0px;
  label {
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

const BackButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  width: max-content;
  height: max-content;
  padding: 10px;
  background-color: ${(props) => props.theme.oppositeColor};
  border-radius: 5px;
  cursor: pointer;
  .svg-inline--fa {
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.background};
  }
`;
export { MasterContainer, InputGroupContainer, BackButtonContainer };
