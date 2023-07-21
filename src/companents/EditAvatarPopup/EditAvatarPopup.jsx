import React, {useEffect, useRef, useContext} from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm.jsx";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext";
 

//попап с формой 
export default function EditAvatarPopup({onClose, isOpen, onUpdateAvatar}) {

    const currentUser = useContext(CurrentUserContext)

    const inputAvatar = useRef('')

    useEffect(()=> {

    },[currentUser])

    
    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar:inputAvatar.current.value
        })

        onClose()
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
                        ref={inputAvatar}
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

        // <div className="popup popup_edit_avatar ">
        //     <div className="popup__container">
        //         <button type="button" className="popup__closed" />
        //         <h3 className="popup__text">Обновить аватар</h3>
        //         <form method="post" name="avatarProfile" className="popup__form">
        //             <input name="avatar" id="avatar-link" required="" placeholder="Ссылка на аватар" defaultValue="" className="popup__input  popup__input_avatar_link" type="url"/>
        //             <span id="avatar-link-error" className="popup__form-error" />
        //             <button type="submit" className="popup__submit popup__submit_Profile_avatar">Сохранить
        //             </button>
        //         </form>
        //     </div>
        // </div>
    )
}