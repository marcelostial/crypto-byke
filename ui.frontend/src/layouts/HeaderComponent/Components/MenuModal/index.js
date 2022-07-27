import React from "react";
import "./index.css";


const MenuModal = ({ menuModal, setMenuModal}) => {
  if (menuModal === true)
    return (
      <div className="modal-container">
        <button className="close-menu" onClick={() => setMenuModal(false)}/>
        </div>

    );
  return null;
};

export default MenuModal;
