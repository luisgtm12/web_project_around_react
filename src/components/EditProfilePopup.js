import { useState,useContext,useEffect } from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm";
function EditProfilePopup({isOpen,onClose,onUpdateUser}) {

  const currentUser = useContext(CurrentUserContext);
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");

  useEffect(() => {
    // Reviso que el usuario en el contexto no sea `undefined`
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  function handleChange(evt) {
    if (evt.target.name === "name") {
      setName(evt.target.value);
    }else  {
      setDescription(evt.target.value);
    }
  }

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();
    
    // Limpiando los inputs
    setName("");
    setDescription("");
    
    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      name={"profile"}
      title={"Editar perfil"}
      onClose={onClose}
    >
      <form id="form-profile" className="form" onSubmit={handleSubmit} noValidate>
        <input
          onChange={name}
          className="form__user-box"
          id="user-name"
          type="text"
          placeholder="Nombre"
          value="Jacques Cousteau"
          minLength="2"
          maxLength="40"
          name="name"
          required
        />
        <span className="user-name-error"></span>
        <input
          onChange={description}
          className="form__user-box"
          id="user-about"
          type="text"
          placeholder="Acerca de mi"
          value="Explorador"
          minLength="2"
          maxLength="200"
          name="about"
          required
        />
        <span className="user-about-error"></span>
        <button type="submit" className="form__button-submit">
          Guardar
        </button>
      </form>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
