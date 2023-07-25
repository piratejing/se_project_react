import React, { useContext } from "react";
import "../blocks/Card.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import liked from "../images/liked.svg";
import unliked from "../images/unliked.svg";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => user === currentUser?.data?._id);

  const handleLikeClick = () => {
    onCardLike(item._id, isLiked, currentUser);
  };

  return (
    <div className="card">
      <img src={item.imageUrl} alt={item.name} className="card__image" onClick={() => onSelectCard(item)} />
      <div className="card__name-container">
        <p className="card__name">{item.name}</p>
        <img src={isLiked ? liked : unliked} alt="like button" className="card__like" onClick={handleLikeClick} />
      </div>
    </div>
  );
};

export default ItemCard;
