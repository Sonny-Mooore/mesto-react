import React from "react";
//попап с формой
function PopupWithForm({ onSubmit, onClose, popupIsOpen, title, name, nameButton, children}) {

  
// console.log(popupIsOpen);
  return (
    <div
      className={`popup popup_type_${name} ${popupIsOpen && "popup_opened"}`}
    >
      <div className="popup__container">
        <button onClick={onClose} type="button" className="popup__closed" />
        <h3 className="popup__text">{title}</h3>
        <form onSubmit={onSubmit} method="post" name={name} className="popup__form">
          {children}
          <button type="submit" className="popup__submit"> {nameButton} </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
