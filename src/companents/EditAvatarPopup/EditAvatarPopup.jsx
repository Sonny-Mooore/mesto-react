import React, {useState} from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
 

//попап с формой 
export default function EditAvatarPopup({onClose, isOpen, onUpdateAvatar}) {


    const [avatar, setNewAvatar] = useState('')


    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar:avatar
        })

    
      } 

    return (

        <PopupWithForm
            onSubmit={handleSubmit}
            onClose={onClose}
            popupIsOpen={isOpen}
            name="edit-avatar"
            nameButton={"Сохранить"}
            title={"Обновить аватар"}
            children={
                <>
                    <input
                        onChange={(event)=> setNewAvatar(event.target.value)}
                        value={avatar ||''}
                        name="avatar"
                        id="avatar-link"
                        required=""
                        placeholder="Ссылка на аватар"
                        className="popup__input  popup__input_avatar_link"
                        type="url"
                    />
                    <span id="avatar-link-error" className="popup__form-error" />
                </>
            }
        />
    )
}