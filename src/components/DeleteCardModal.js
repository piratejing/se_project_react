import "../blocks/DeleteCardModal.css";
import { useEffect } from "react";
import React from "react";

const DeleteCardModal = ({ onClose, handleDelete }) => {
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, [onClose]);
  return (
    <div className="modal modal__delete-container">
      <button className="modal__delete-popup-close" type="button" onClick={onClose}></button>
      <div className="modal__delete-message">
        <p className="modal__delete-text">Are you sure you want to delete this item?</p>
        <p className="modal__delete-text">This action is irreversable.</p>
      </div>
      <p className="modal__delete-yes" onClick={handleDelete}>
        Yes, delete item
      </p>
      <p className="modal__delete-cancel" onClick={onClose}>
        Cancel
      </p>
    </div>
  );
};

export default DeleteCardModal;
