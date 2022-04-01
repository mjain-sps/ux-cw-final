import styled from "styled-components";

const MasterContainer = styled.div`
  height: 75px;
  white-space: nowrap;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  border: 1px solid black;
  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
  }
`;

export { MasterContainer };
