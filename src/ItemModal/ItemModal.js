function ItemModal({ selectedCard, onClose }) {
  return (
    <div className={`modal `}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          X
        </button>
        <img src={selectedCard.link} />
        <div>{selectedCard.name}</div>
        <div>Weather type: {selectedCard.weather} </div>
      </div>
    </div>
  );
}

export default ItemModal;
