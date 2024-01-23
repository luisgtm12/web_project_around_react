import Header from './components/Header.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <>
    <div className="page">
      <main>
        <Header/>
        <section>
          <div className="profile">
            <div className="profile__avatar-overlay"></div>
            <img src="./images/avatar.png" id="avatar" alt="foto de perfil" className="profile-avatar"/>
            <div className="profile__content">
              <h2 className="profile__content-name">Jacques Cousteau</h2>
              <h3 className="profile__content-workstation">Explorador</h3>
              <img src="./images/edit-icon.png" alt="boton de editar" className="profile__edit-button"/>
            </div>
            <button className="profile__add-button">
              <img src="./images/icono-add.png" id="add-icon" alt="icono de simbolo +"/>
            </button>
          </div>
        </section>
        <section>
          <div className="places" id="places"></div>
        </section>
        
      </main>
    </div>
    <div id="modal-profile" className="modal">
      <div className="modal__contain">
        <img src="./images/close-icon.png" id="close-icon-profile" alt="icono de cierre" className="modal__close-icon"/>
        <h4 class="modal__contain-title">Edit profile</h4>
        <form id="form-profile" className="form" novalidate>
            <input className="form__user-box" id="user-name" type="text" placeholder="Nombre" value="Jacques Cousteau" minlength="2" maxlength="40" name="name" required/>
            <span className="user-name-error"></span>
            <input className="form__user-box" id="user-about" type="text" placeholder="Acerca de mi" value="Explorador" minlength="2" maxlength="200" name="about" required/>
            <span className="user-about-error"></span>
            <button type="submit" class="form__button-submit">Guardar</button>
        </form>
      </div>
    </div>
      <div id="modal-place" className="modal">
        <div className="modal__contain">
          <img src="./images/close-icon.png" id="close-icon-place" alt="icono de cierre" className="modal__close-icon"/>
          <h4 className="modal__contain-title">Nuevo lugar</h4>
          <form id="form-place" className="form" novalidate>
              <input className="form__user-box" id="place-title" type="text" placeholder="Título" minlength="2" maxlength="30" name="name" required/>
              <span className="place-title-error"></span>
              <input className="form__user-box" id="place-link" type="url" placeholder="Enlace a la imagen" name="link" required/>
              <span className="place-link-error"></span>
              <button type="submit" className="form__button-submit" disabled="true">Crear</button>
          </form>
        </div>
      </div>
      <div id="modal-img" className="modal">
        <div className="modal__contain-img">
          <img src="./images/close-icon.png" id="close-icon-image" alt="icono de cierre" className="modal__close-icon"/>
          <img src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" id="modal-img-src" className="modal__img" alt="paisaje"/>
          <h4 id="modal-img-title" className="modal__title">Titulo paisaje</h4>
        </div>
      </div>
      <div id="modal-confirm" className="modal">
        <div className="modal__contain-confirmation">
          <img src="./images/close-icon.png" id="close-icon-confirm" alt="icono de cierre" className="modal__close-icon"/>
          <h4 className="modal__contain-confirmation-title">¿Estás seguro?</h4>
          <button id="btn-confirmation" type="submit" className="modal__contain-confirmation-button">Si</button>
        </div>
      </div>
      <div id="modal-edit-photo" className="modal">
        <div className="modal__contain">
          <img src="./images/close-icon.png" id="close-icon-edit-photo" alt="icono de cierre" className="modal__close-icon"/>
          <h4 className="modal__contain-title">Cambiar foto de perfil</h4>
          <form id="form-edit-photo" className="form" novalidate>
              <input class="form__user-box" id="edit-photo-avatar" type="url" placeholder="Url para imagen de perfil" name="link" required/>
              <span className="edit-photo-avatar-error"></span>
              <button type="submit" className="form__button-submit" disabled>Guardar</button>
          </form>
        </div>
      </div>
      <template className="card">
        <div className="places-card" id="card-0">
          <img src="./images/trash-icon.png" id="tras-icon" className="places-card__trash" alt="tachito de basura"/>
          <img src="https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg" 
          alt="Photo Valle de Yosemite" className="places-card__image"/>
          <div className="places-card__contain">
            <p className="places-card__contain_title">Valle de Yosemite</p>
            <div>
              <img src="./images/corazon.png" id="like-0" alt="icono de corazon" className="places-card__contain_like"/>
              <p className="places-card__contain_like-count">3</p>
            </div>
          </div>
        </div>
      </template>
      <Footer/>
      </>
  );
}

export default App;
