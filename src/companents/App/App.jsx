import Header from '../../companents/Header/Header'
function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="profile">
          <button type="button" className="profile__avatar-overlay">
            <img className="profile__avatar" src="#" alt="" />
          </button>
          <div className="profile__info">
            <div className="profile__edit">
              <h1 className="profile__title profile__title_name " />
              <button type="button" className="profile__button" />
            </div>
            <p className="profile__subtitle" />
          </div>
          <button type="button" className="profile__add-card" />
        </section>
        <section className="elements"></section>
      </main>
      <footer className="footer">
        <p className="footer__text">© 2023 Mesto Russia</p>
      </footer>
      <template id="templateCard" className="template__card" />
      <div className="popup popup_profile-edit ">
        <div className="popup__container">
          <button type="button" className="popup__closed" />
          <h3 className="popup__text">Редактировать профиль-</h3>
          <form method="post" name="popupEditForm" className="popup__form">
            <input
              id="profile-name"
              name="userName"
              className="popup__input popup__input_edit_name"
              minLength={2}
              maxLength={40}
              required=""
              placeholder="Введите имя"
              defaultValue=""
              type="text"
            />
            <span id="profile-name-error" className="popup__form-error" />
            <input
              name="userjob"
              minLength={2}
              className="popup__input popup__input_edit_job"
              maxLength={200}
              required=""
              id="profile-job"
              placeholder="Расскажите о себе"
              defaultValue=""
              type="text"
            />
            <span id="profile-job-error" className="popup__form-error" />
            <button
              type="submit"
              className="popup__submit popup__submit_edit_submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_add-card ">
        <div className="popup__container">
          <button type="button" className="popup__closed" />
          <h3 className="popup__text">Новое место</h3>
          <form method="post" name="popupAddCardForm" className="popup__form">
            <input
              name="name"
              id="card-name"
              minLength={2}
              maxLength={30}
              required=""
              placeholder="Название"
              defaultValue=""
              className="popup__input popup__input_card_name "
              type="text"
            />
            <span id="card-name-error" className="popup__form-error" />
            <input
              name="link"
              id="card-link"
              required=""
              placeholder="Ссылка на картинку"
              defaultValue=""
              className="popup__input popup__input_card_link"
              type="url"
            />
            <span id="card-link-error" className="popup__form-error" />
            <button
              type="submit"
              className="popup__submit popup__submit_card_submit"
            >
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_zoom">
        <div className="popup__zoom-conteiner">
          <img src="#" alt="#" className="popup__zoom-image" />
          <button className="popup__closed" />
          <p className="popup__zoom-title" />
        </div>
      </div>
      <div className="popup popup_edit_avatar ">
        <div className="popup__container">
          <button type="button" className="popup__closed" />
          <h3 className="popup__text">Обновить аватар</h3>
          <form method="post" name="avatarProfile" className="popup__form">
            <input
              name="avatar"
              id="avatar-link"
              required=""
              placeholder="Ссылка на аватар"
              defaultValue=""
              className="popup__input  popup__input_avatar_link"
              type="url"
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
      <div className="popup popup_delete-popup ">
        <div className="popup__container">
          <button type="button" className="popup__closed" />
          <h3 className="popup__text">Вы уверены?</h3>
          <form method="post" name="deleteCard" className="popup__form">
            <button
              type="submit"
              className="popup__submit popup__submit_delete_card"
            >
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
