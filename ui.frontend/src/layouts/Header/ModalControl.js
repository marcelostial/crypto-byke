import React from "react";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Hamburger } from "../../assets/menu.svg";

export const ModalControl = ({ switches, controls, label, variant }) => {
  const close = (
    <Close className="nav-link p3" onClick={() => switches(false)} />
  );

  if (variant === "language") {
    const open = (
      <div
        className="nav-link p3"
        id="control-language"
        onClick={() => switches(true)}
      >
        {label.toUpperCase()}
      </div>
    );

    return controls ? close : open;
  }

  if (variant === "hamburger") {
    const open = (
      <Hamburger
        className="nav-link p3"
        id="control-nav"
        onClick={() => switches(true)}
      />
    );

    return controls ? close : open;
  }
};
