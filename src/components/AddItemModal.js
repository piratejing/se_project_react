import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

export default function AddItemModal({ onClose, isOpen, onAddItem }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [weatherType, setWeatherType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, link, weatherType);
    onAddItem({ name, link, weatherType });
  }

  function handleWeatherType(e) {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  }

  function handleLink(e) {
    setLink(e.target.value);
  }

  useEffect(() => {
    if (isOpen) {
      setName("");
      setLink("");
      setWeatherType("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm title="New garment" onClick={onClose} onSubmit={handleSubmit} buttonText="Add Garment">
      <div className="modal__labels">
        <label className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="3000"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="modal__label">
          Image
          <input className="modal__input" type="url" name="link" minLength="1" placeholder="Image Url" onChange={handleLink} />
        </label>
      </div>
      <p className="modal__paragraph">Select the weather type:</p>
      <div className="modal__radios">
        <div className="modal__radio">
          <input className="modal__input-radio" type="radio" name="button" id="hot" value="hot" onChange={handleWeatherType} />
          <label>Hot</label>
        </div>
        <div className="modal__radio">
          <input className="modal__input-radio" type="radio" name="button" id="warm" value="warm" onChange={handleWeatherType} />
          <label>Warm</label>
        </div>
        <div className="modal__radio">
          <input className="modal__input-radio" type="radio" name="button" id="cold" value="cold" onChange={handleWeatherType} />
          <label>Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
}
