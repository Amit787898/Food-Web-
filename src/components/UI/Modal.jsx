import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import modalCss from "./Modal.module.css";

function Backdrop(props) {
  return <div className={modalCss.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className={modalCss.modal}>
      <div className={modalCss.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
