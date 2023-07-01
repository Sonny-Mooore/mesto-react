import React from "react";
//попап с формой 
export default function EditAvatarPopup () {
    return(
        <div className="popup popup_edit_avatar ">
            <div className="popup__container">
                <button type="button" className="popup__closed" />
                <h3 className="popup__text">Обновить аватар</h3>
                <form method="post" name="avatarProfile" className="popup__form">
                    <input name="avatar" id="avatar-link" required="" placeholder="Ссылка на аватар" defaultValue="" className="popup__input  popup__input_avatar_link" type="url"
                    />
                    <span id="avatar-link-error" className="popup__form-error" />
                    <button
                        type="submit"
                        className="popup__submit popup__submit_Profile_avatar"
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    )
}