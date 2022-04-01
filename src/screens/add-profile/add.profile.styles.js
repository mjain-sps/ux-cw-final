import styled from "styled-components";

const MasterContainer = styled.div``;

const InputGroupContainer = styled.div``;

const TwoColumnInputGroups = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfilePicPreviewContainer = styled.div`
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export {
  MasterContainer,
  InputGroupContainer,
  TwoColumnInputGroups,
  ProfilePicPreviewContainer,
};
