import styled from "styled-components";

const MasterContainer = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.panel};
  padding: 15px 10px;
  position: relative;

  h4 {
    font-size: ${(props) => props.theme.fontSize.large};
    text-align: center;
    margin: 0;
  }
  label {
    margin: 10px 0;
    padding-left: 5px;
    font-size: ${(props) => props.theme.fontSize.medium};
  }
  button {
    margin: 20px 0;
    background-color: ${(props) => props.theme.contrastPanel.bg};
    color: ${(props) => props.theme.contrastPanel.color};
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;
const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  text-align: center;
  margin: auto;
  position: relative;
`;
const BackButtonContainer = styled.div`
  position: absolute;
  left: 5px;
  height: 40px;
  line-height: 8px;
  font-size: 32px;
  background-color: ${(props) => props.theme.contrastPanel.bg};
  color: ${(props) => props.theme.contrastPanel.color};
  border: 1px solid black;
  padding: 5px 10px;
  cursor: pointer;
  bottom: 35px;
  border-radius: 5px;
`;
const InputGroupContainer = styled.div`
  span {
    color: red;
  }
  p {
    margin: 5px 0 0 0;
    color: red;
    font-size: ${(props) => props.theme.fontSize.small};
    text-align: left;
  }
  margin: 15px 0px;
`;

const TwoColumnInputGroups = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfilePicPreviewContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfilePicureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  .camera-icon {
    font-size: 56px;
    color: #01579b;
    cursor: pointer;
  }
`;
const DeleteStudentProfile = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: red;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  span {
    margin-right: 5px;
    color: black;
  }
`;
export {
  MasterContainer,
  InputGroupContainer,
  TwoColumnInputGroups,
  ProfilePicPreviewContainer,
  ProfilePicureWrapper,
  BackButtonContainer,
  BackButtonWrapper,
  DeleteStudentProfile,
};
