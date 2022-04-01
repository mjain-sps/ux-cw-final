import styled from "styled-components";

const MasterContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  h1 {
    margin: 0;
  }
  img {
    width: 70%;
    height: 70%;
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const PecEdit = styled.div``;
const SoundPlay = styled.div``;

const AddToFavs = styled.div``;

export { MasterContainer, FooterSection, PecEdit, SoundPlay, AddToFavs };
