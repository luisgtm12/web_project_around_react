import PopupWithForm from "./PopupWithForm.js";
function AddPlacePopup({isOpen,onClose}){
  return(
    <PopupWithForm
          isOpen={isOpen}
          name={"place"}
          title={"Nuevo Lugar"}
          onClose={onClose}
        >
          <form id="form-place" className="form" noValidate>
            <input
              className="form__user-box"
              id="place-title"
              type="text"
              placeholder="Título"
              minLength="2"
              maxLength="30"
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
              disabled
            >
              Crear
            </button>
          </form>
        </PopupWithForm>
  )
}

export default AddPlacePopup;