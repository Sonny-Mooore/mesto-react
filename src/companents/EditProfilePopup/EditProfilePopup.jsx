import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";


export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('')
    const [description, setUserAbout] = useState('')
    // console.log(userName);
    
    useEffect(() => {
        setName(currentUser.name);
        setUserAbout(currentUser.about);
    }, [currentUser, isOpen]);


    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
            name:name,
            about: description,
          });
    } 



    return (
        <PopupWithForm
            onSubmit={handleSubmit}
            onClose={onClose}
            popupIsOpen={isOpen}
            name="edit-Popup"
            nameButton={"Сохранить"}
            title={"Редактировать профиль"}
            children={
                <>
                    <input
                        onChange={(event) => setName(event.target.value)}
                        value={name ||''}
                        id="profile-name"
                        name="userName"
                        className="popup__input popup__input_edit_name"
                        minLength={2}
                        maxLength={40}
                        required=""
                        placeholder="Введите имя"
                        type="text"
                    />
                    <span id="profile-name-error" className="popup__form-error" />
                    <input
                        onChange={(event) => setUserAbout(event.target.value)}
                        value={description ||''}
                        name="userjob"
                        minLength={2}
                        className="popup__input popup__input_edit_job"
                        maxLength={200}
                        required=""
                        id="profile-job"
                        placeholder="Расскажите о себе"
                        type="text"
                    />
                    <span id="profile-job-error" className="popup__form-error" />
                </>
            }
        />



        // <div
        //     className={`popup popup_type_edit-Popup ${isOpen && "popup_opened"}`}>
        //     <div className="popup__container">
        //         <button onClick={onClose} type="button" className="popup__closed" />
        //         <h3 className="popup__text">Редактировать профиль</h3>
        //         <form onSubmit={handleSubmit} method="post" name={'edit-Popup'} className="popup__form">
        //             <input
        //                 onChange={(event)=> setUserName(event.target.value) }
        //                 value={nameUser}
        //                 id="profile-name"
        //                 name="userName"
        //                 className="popup__input popup__input_edit_name"
        //                 minLength={2}
        //                 maxLength={40}
        //                 required=""
        //                 placeholder="Введите имя"
        //                 type="text"
        //             />
        //             <span id="profile-name-error" className="popup__form-error" />
        //             <input
        //                 onChange={(event)=> setDescription(event.target.value) }
        //                 value={description}
        //                 name="userjob"
        //                 minLength={2}
        //                 className="popup__input popup__input_edit_job"
        //                 maxLength={200}
        //                 required=""
        //                 id="profile-job"
        //                 placeholder="Расскажите о себе"
        //                 type="text"
        //             />
        //             <span id="profile-job-error" className="popup__form-error" />

        //             <button onClick={(evt) => evt.preventDefault()} type="submit" className="popup__submit">Сохранить</button>
        //         </form>
        //     </div>
        // </div>
    )




}