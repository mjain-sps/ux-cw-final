import styled from "styled-components";

const MasterContainer = styled.div`
  width: 100%;
`;

const LoginContainer = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  margin: auto;
  border: 1px solid black;
  h4 {
    text-align: center;
  }
  p {
    margin: 10px;
    color: red;
    text-align: center;
  }
`;

const InputGroupContainer = styled.div`
  width: 100%;
  label {
    margin: 10px 0;
    font-size: 18px;
    padding-left: 5px;
  }
  p {
    margin: 5px 0 0 0;
    color: red;
    font-size: 14px;
  }
`;

const Footer = styled.div``;

export { LoginContainer, MasterContainer, InputGroupContainer, Footer };
