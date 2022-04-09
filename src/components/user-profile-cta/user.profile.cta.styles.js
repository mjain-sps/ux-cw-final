import styled from "styled-components";

const MasterContainer = styled.div`
  width: 50px;
  height: 38px;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const UserDropDownMenu = styled.div`
  position: absolute;
  min-width: 250px;
  height: max-content;
  padding: 10px 5px;
  border: 1px solid black;
  right: 0;
  background-color: ${(props) => props.theme.contrastPanel.bg};
  border-radius: 5px;
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px;
  }
  li {
    list-style: none;
    text-align: left;
    width: 100%;
    color: ${(props) => props.theme.contrastPanel.color};
    padding: 10px;
    border-bottom: 1px solid white;
  }
`;
export { MasterContainer, UserDropDownMenu };
