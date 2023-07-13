import React, { useState } from "react";

export default function Card({ card, onCardClick, currentUser }) {

    const isOwner = card.owner._id === currentUser._id;
    const isLiked = !!(card.likes.find(like => like._id === currentUser._id))

    return (
        <div className="element">
            <img
                onClick={() => onCardClick(card)}
                src={card.link}
                alt={card.name}
                className="element__image"
            />
            {isOwner && <button type="button" className="element__button-trash" />}
            <div className="element__about">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__container">
                    <button type="button" className={`element__button ${isLiked ? 'element_button-active' : ''}`}/>
                    <span className="element__button_like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    );
}
