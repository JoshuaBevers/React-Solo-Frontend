import React, { useEffect } from "react";
import Styled from "styled-components";

const ModalOverlay = Styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ModalContent = Styled.div`
  background: white;
  border: solid 1px black;
  margin: auto;
  max-width: 280px;
  min-height: 100px;
  padding: 1rem;
  width: 100%;
`;

const Modal = (props) => {
  const handleClick = () => {
    props.closeModal();
  };

  useEffect(() => {
    setTimeout(handleClick, 2000);
  });

  return (
    <ModalOverlay>
      <ModalContent>
        <p>You have accepted the quest load quest here!</p>
        <button onClick={() => handleClick()}>Close Modal</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
