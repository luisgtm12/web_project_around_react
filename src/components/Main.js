import Profile from "./Profile";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from './ImagePopup.js'
import Card from "./Card.js";
import { useEffect, useState } from "react";
import api from "../utils/api.js";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  isOpen,
  onClose,
  onCardClick,
  isCard,
}) {
  const [isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen] =
    isOpen;

  const [userName, setUserName] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.defaultProfile().then((userInfo) => {
      setUserName(userInfo.name);
      setUserAbout(userInfo.about);
      setUserAvatar(userInfo.avatar);
    });

    api.getCards().then((cards)=>{
      setCards(cards);
    })
  },[]);
  
  return (
    <>
      <main>
        <Profile
          onEditAvatarClick={onEditAvatarClick}
          onEditProfileClick={onEditProfileClick}
          onAddPlaceClick={onAddPlaceClick}
          description={[userName, userAbout, userAvatar]}
        ></Profile>
        <section className="places" id="places">
          {
            cards.map((card,i)=>(
              <Card 
              key={`card-${i}`}
              card={card}
              id={`card-${i}`}
              onCardClick={onCardClick}
              />
            ))
          }
          
        </section>
        
        <PopupWithForm
          isOpen={isEditProfilePopupOpen}
          name={"profile"}
          title={"Editar perfil"}
          onClose={onClose}
        >
          <form id="form-profile" className="form" novalidate>
            <input
              className="form__user-box"
              id="user-name"
              type="text"
              placeholder="Nombre"
              value="Jacques Cousteau"
              minlength="2"
              maxlength="40"
              name="name"
              required
            />
            <span className="user-name-error"></span>
            <input
              className="form__user-box"
              id="user-about"
              type="text"
              placeholder="Acerca de mi"
              value="Explorador"
              minlength="2"
              maxlength="200"
              name="about"
              required
            />
            <span className="user-about-error"></span>
            <button type="submit" class="form__button-submit">
              Guardar
            </button>
          </form>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isAddPlacePopupOpen}
          name={"place"}
          title={"Nuevo Lugar"}
          onClose={onClose}
        >
          <form id="form-place" className="form" novalidate>
            <input
              className="form__user-box"
              id="place-title"
              type="text"
              placeholder="Título"
              minlength="2"
              maxlength="30"
              name="name"
              required
            />
            <span className="place-title-error"></span>
            <input
              className="form__user-box"
              id="place-link"
              type="url"
              placeholder="Enlace a la imagen"
              name="link"
              required
            />
            <span className="place-link-error"></span>
            <button
              type="submit"
              className="form__button-submit"
              disabled="true"
            >
              Crear
            </button>
          </form>
        </PopupWithForm>

        <PopupWithForm
          isOpen={isEditAvatarPopupOpen}
          name={"avatar"}
          title={"Foto de perfil"}
          onClose={onClose}
        >
          <form id="form-edit-photo" className="form" novalidate>
            <input
              class="form__user-box"
              id="edit-photo-avatar"
              type="url"
              placeholder="Url para imagen de perfil"
              name="link"
              required
            />
            <span className="edit-photo-avatar-error"></span>
            <button type="submit" className="form__button-submit" disabled>
              Guardar
            </button>
          </form>
        </PopupWithForm>
        <ImagePopup
        title={isCard?.name || ""}
        image={isCard?.link || ""}
        isOpen={!!isCard}
        onclose={onClose}        
        />
      </main>
    </>
  );
}

export default Main;
