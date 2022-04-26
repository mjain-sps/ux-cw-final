import styled from "styled-components";

const MasterComponent = styled.div`
  width: 70%;
  background-color: ${(props) => props.theme.panel};
  padding: 10px 20px;
  min-height: 600px;
  border-radius: 5px;
  margin: 20px auto;
  select {
    width: 100%;
    height: 30px;
    border-radius: 5px;
  }
  h4 {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    color: ${(props) => props.theme.oppositeColor};
    font-size: ${(props) => props.theme.fontSize.large};
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    text-align: center;
  }
  h6 {
    font-size: ${(props) => props.theme.fontSize.small};
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    margin: 20px 0;
  }
  button {
    background-color: ${(props) => props.theme.contrastPanel.bg};
    color: ${(props) => props.theme.contrastPanel.color};
  }
`;

const InputGroupContainer = styled.div`
  margin: 10px 0;
  label {
    margin: 10px 0;
    padding-left: 5px;
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;
export { MasterComponent, InputGroupContainer };
