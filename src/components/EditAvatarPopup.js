import { useContext, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditAvatarPopup({isOpen,onClose,onUpdateAvatar}){
  const currentUser = useContext(CurrentUserContext);
  const avatarRef = useRef(currentUser?.avatar ?? "");

  function handleSubmit(e){
    e.preventDefault();
    
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return(
    <PopupWithForm
          isOpen={isOpen}
          name={"avatar"}
          title={"Foto de perfil"}
          onClose={onClose}
        >
          <form id="form-edit-photo" className="form" onSubmit={handleSubmit} noValidate>
            <input
              className="form__user-box"
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
  )
}

export default EditAvatarPopup;