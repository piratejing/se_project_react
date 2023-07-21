import React, { useContext } from "react";
import ItemCard from "./ItemCard";
import "../blocks/ClothesCardSection.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const ClothesSection = ({ cards, onCreateModal, onSelectCard, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="clothes__section">
      <div className="clothes__section-header">
        <h2 className="clothes__section-header-text">Your Items</h2>
        <button className="clothes__section-add-button" type="button" onClick={onCreateModal}>
          + Add new
        </button>
      </div>
      <div className="clothes__section-cards-container">
        {cards
          .filter((card) => card.owner === (currentUser.data === undefined ? "" : currentUser?.data?._id))
          .map((card) => {
            return <ItemCard key={card._id} item={card} onSelectCard={onSelectCard} onCardLike={onCardLike} />;
          })}
      </div>
    </div>
  );
};

export default ClothesSection;
