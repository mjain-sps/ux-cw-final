import styled from "styled-components";

const MasterContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid rgba(125, 125, 125, 0.5);
    outline: none;
    margin: 5px 0;
    font-size: ${(props) => props.theme.fontSize.small};
    &:focus {
      border: 1px solid orange;
      outline: 2px solid black;
      outline-offset: 1px;
    }
    &::placeholder {
      font-size: 16px;
      padding-left: 5px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  }
`;

export { MasterContainer };
