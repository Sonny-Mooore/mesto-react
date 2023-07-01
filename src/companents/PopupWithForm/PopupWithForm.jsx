import React from "react";
//попап с формой 
function PopupWithForm({ onClose, popupIsOpen, title, name, nameButton, children }) {
//popupEditForm
    return (
        <div className={`popup popup_type_${name} ${popupIsOpen && 'popup_opened'}`}>
        <div className="popup__container"  >
            <button onClick={onClose}  type="button" className="popup__closed" />
            <h3 className="popup__text">{title}</h3>
            <form method="post" name={name} className="popup__form">

                {children}
                <button onClick={ (evt)=> evt.preventDefault() } type="submit" className="popup__submit">{nameButton}</button>
                 
            </form>
        </div>
    </div>
    
    )
}
export default PopupWithForm