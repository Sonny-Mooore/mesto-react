import React, { useContext } from "react";
import Card from "../Card/Card.jsx";
import CurrentUserContext from "../../utils/Contexts/CurrentUserContext";
import CardContext from "../../utils/Contexts/CardContext";

//functions for popops
// ...props: onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDeleteб, cards

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  const cards = useContext(CardContext);

  return (
    <main>
      <section className="profile">
        <button
          onClick={onEditAvatar}
          type="button"
          className="profile__avatar-overlay"
        >
          <img className="profile__avatar" src={currentUser.avatar} alt="" />
        </button>
        <div className="profile__info">
          <div className="profile__edit">
            <h1 className="profile__title profile__title_name ">
              {currentUser.name}
            </h1>
            <button
              onClick={onEditProfile}
              type="button"
              className="profile__button"
            />
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-card"
        />
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            handleDeleteClick={onCardDelete}
            handleCardLike={onCardLike}
            currentUser={currentUser}
            onCardClick={onCardClick}
            key={card._id}
            card={card}
          />
        ))}
      </section>
    </main>
  );
}
export default Main;
