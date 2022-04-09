import styled from "styled-components";

const MasterContainer = styled.div`
  height: 100px;
  white-space: nowrap;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  img {
    width: 85px;
    height: 85px;
    object-fit: cover;
    border: 1px solid rgba(125, 125, 125, 0.4);
  }
`;

const FavPecsWrapper = styled.div`
  border: 1px solid black;
  h4 {
    background-color: ${(props) => props.theme.similarShadeDarkPanel};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.background};
    padding: 10px;
    border-radius: 8px;
    text-align: center;
  }
  height: max-content;
  padding: 0 10px;
  margin-bottom: 10px;
`;
export { MasterContainer, FavPecsWrapper };
