import "../blocks/ItemCard.css";

const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card">
      <div className="card__container">
        <img src={item.link} className="card__image" alt={item.name} onClick={() => onSelectCard(item)} />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
