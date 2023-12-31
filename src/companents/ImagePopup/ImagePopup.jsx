import React from "react";


export default function ImagePopup({ card, onClose}) {



   return (
    <div className={`popup popup_type_image ${ card.link !== '' ? 'popup_opened' : ''}`}>
      <div className="popup__zoom-conteiner">
        <img src={card.link} alt={card.name} className="popup__zoom-image" />
        <button onClick={onClose} className="popup__closed" />
        <p className="popup__zoom-title">{card.name}</p>
      </div>
    </div>
  )
}