import React from "react";


export default function ImagePopup() {
    return(
        <div className="popup popup_zoom">
        <div className="popup__zoom-conteiner">
          <img src="#" alt="#" className="popup__zoom-image" />
          <button className="popup__closed" />
          <p className="popup__zoom-title" />
        </div>
      </div>
    )
}