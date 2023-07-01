import React from "react";


export default function Card({ card }) {

    return (
        <div className="element">
            <img src={card.link} alt={card.name} className="element__image" />
            <button type="button" className="element__button-trash" />
            <div className="element__about">
                <h2 className="element__title">
                    {card.name}
                </h2>
                <div className="element__container">
                    <button type="button" className="element__button" />
                    <span className="element__button_like-counter">
                        {/* {card.likes} */}
                    </span>
                </div>
            </div>
        </div>
    )
}
