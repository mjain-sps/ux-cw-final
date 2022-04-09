import styled from "styled-components";

const MasterContainer = styled.div`
  background-color: ${(props) => props.theme.panel};
  h4 {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    color: ${(props) => props.theme.background};
    font-size: ${(props) => props.theme.fontSize.large};
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    text-align: center;
  }
  width: 80%;
  padding: 10px 20px;
  height: 500px;
  border-radius: 5px;
  margin: 20px auto;
`;

const InputGroupContainer = styled.div``;
export { MasterContainer, InputGroupContainer };
