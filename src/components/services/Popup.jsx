import { createPortal } from "react-dom";
import { useEffect } from "react";
import s from "./Popup.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  const onBackdropClick = (ev) => {
    if (ev.target === ev.currentTarget) onClose();
  };
  const modalListener = (ev) => {
    if (ev.code === "Escape") onClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", modalListener);
    document.querySelector("#modal-root").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", modalListener);
      document.querySelector("#modal-root").style.display = "none";
      document.querySelector("body").style.overflow = "visible";
    };
  });

  return createPortal(
    <div className={s.modalBackground} onClick={onBackdropClick}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot
  );
}
