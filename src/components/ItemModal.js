import "../blocks/ItemModal.css";
import closeButton from "../images/close-button.svg";

const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="item__modal">
      <div className="item__modal-content">
        <button type="button" className="modal__button-close" onClick={onClose}>
          <img src={closeButton} alt="close button" />
        </button>
        <img src={selectedCard.link} className="item__modal-image" alt={selectedCard.name} />
        <div className="item__modal-description">{selectedCard.name}</div>
        <div className="item__modal-description">Weather type: {selectedCard.weather}</div>
      </div>
    </div>
  );
};
export default ItemModal;
