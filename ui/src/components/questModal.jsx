import React, { useEffect } from "react";
import Styled from "styled-components";

const ModalOverlay = Styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0,0,0,0.1);
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalContent = Styled.div`
  color: black;
  background: grey;
  border: solid 1px black;
  margin: auto;
  max-width: auto;
  min-height: auto;
  padding-left: 10px;
  padding-right: 20px;
  position: fixed;
  bottom: 0px;
  border-radius: 100px;

`;

const Modal = (props) => {
  const handleClick = () => {
    props.closeModal();
  };

  useEffect(() => {
    setTimeout(handleClick, 1000);
  });

  return (
    <ModalOverlay>
      <ModalContent>
        <p>Quest Accepted: {props.quest.questName}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
