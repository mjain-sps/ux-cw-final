import styled from "styled-components";

const SpinnerBackDrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(125, 125, 125, 0.6);
`;

const Spinner = styled.div`
  position: absolute;
  top: 45%;
  left: 360px;
  z-index: 15 !important;
  ::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px white;
    border-bottom-color: #1c87c9;
    border-radius: 50%;
    content: "";
    height: 40px;
    width: 40px;
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }

  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`;

export { SpinnerBackDrop, Spinner };
