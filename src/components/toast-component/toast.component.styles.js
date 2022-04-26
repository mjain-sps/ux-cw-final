import styled from "styled-components";

const MasterContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 10px;
  height: max-content;
  border-radius: 5px;
  p {
    font-size: ${(props) => props.theme.fontSize.medium};
    margin: 10px;
    padding: 0 10px;
  }
`;

export { MasterContainer };
