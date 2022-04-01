import styled from "styled-components";

const MasterContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const ProfileCards = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid rgba(125, 125, 125, 0.3);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export { ProfileCards, MasterContainer };
