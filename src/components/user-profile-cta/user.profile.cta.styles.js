import styled from "styled-components";

const MasterContainer = styled.div`
  width: 50px;
  height: 50px;
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
`;
export { MasterContainer, UserDropDownMenu };
