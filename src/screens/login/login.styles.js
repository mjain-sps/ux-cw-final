import styled from "styled-components";

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const LoginContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  align-items: center;
  margin: auto;
  border: 1px solid black;
  border-radius: 5px;
  padding: 30px 20px;
  background-color: ${(props) => props.theme.panel};
  h4 {
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.text};
  }
  p {
    margin: 10px;
    color: red;
    text-align: center;
  }
  label {
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  button {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontSize.medium};
    border: 2px solid ${(props) => props.theme.oppositeColor};
  }
`;

const InputGroupContainer = styled.div`
  width: 100%;
  label {
    margin: 10px 0;
    padding-left: 5px;
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  p {
    margin: 5px 0 0 0;
    color: red;
    font-size: ${(props) => props.theme.fontSize.small};
    text-align: left;
  }
`;

const Footer = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.contrastPanel.bg};
  color: ${(props) => props.theme.contrastPanel.color};
  padding: 10px 15px;
  border-radius: 8px;
  a {
    color: #76ff03;
  }
`;

export { LoginContainer, MasterContainer, InputGroupContainer, Footer };
