import React, { useContext } from "react";
import ButtonLike from "./ButtonLike/ButtonLike";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext";


export default function Card({ card, onCardClick, handleCardLike, handleDeleteClick}) {
  const currentUser = useContext(CurrentUserContext)
  const isOwner = !!(card.owner._id === currentUser._id);
  const isLiked = card?.likes?.some((item) => item._id === currentUser._id);
// console.log(card);
  return (
    <div className="element">
      <img
        onClick={() => onCardClick(card)}
        src={card.link}
        alt={card.name}
        className="element__image"
      />
      {isOwner && (
        <button
          onClick={() => handleDeleteClick(card._id)}
          type="button"
          className="element__button-trash"
        />
      )}
      <div className="element__about">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__container">
          <ButtonLike
            isLiked={isLiked}
            handleLike={handleCardLike}
            currentUserId={currentUser}
            card={card}
          />
        </div>
      </div>
    </div>
  );
}
