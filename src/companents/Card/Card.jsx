import React from "react";
import ButtonLike from "./ButtonLike/ButtonLike";


export default function Card({ card, onCardClick, currentUser, handleDeleteClick}) {

    const isOwner = !!(card.owner._id === currentUser._id)

    return (
        <div className="element">
            <img
                onClick={() => onCardClick(card)}
                src={card.link}
                alt={card.name}
                className="element__image"
            />
            {isOwner && <button
                onClick={() => handleDeleteClick(card._id)}
                type="button"
                className="element__button-trash"
            />}
            <div className="element__about">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__container">
                    <ButtonLike currentUserId={currentUser._id} card={card} />
                </div>
            </div>
        </div>
    );
}
