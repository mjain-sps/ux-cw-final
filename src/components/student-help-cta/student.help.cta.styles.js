import styled from "styled-components";

const MasterContainerPecLevel1 = styled.div`
  height: 150px;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  border: 1px solid black;
  img {
    height: 100%;
    width: 150px;
    object-fit: cover;
  }
`;

const MasterContainerPecLevel3 = styled.div`
  height: 150px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const SectionForPecLevel3 = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  img {
    height: 100%;
    width: 100px;
    object-fit: cover;
  }
`;
export {
  MasterContainerPecLevel1,
  MasterContainerPecLevel3,
  SectionForPecLevel3,
};
