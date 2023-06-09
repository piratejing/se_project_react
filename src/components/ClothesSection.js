import "../blocks/Clothes.css";

export default function ClothesSection({ openModal }) {
  return (
    <div className="clothes">
      <div className="clothes__title">Your items</div>
      <button className="clothes__button" type="button" onClick={openModal}>
        + Add new
      </button>
    </div>
  );
}
