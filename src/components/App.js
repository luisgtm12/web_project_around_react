import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import { useState } from "react";
import Card from "./Card.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isCard,setCard] = useState(null)

  function handleEditAvatarClick (){
    setIsEditAvatarPopupOpen(true);
    }
  
    function handleEditProfileClick (){
      setIsEditProfilePopupOpen(true);
    }
  
    function handleAddPlaceClick (){
      setIsAddPlacePopupOpen(true);
    }

    function closePopups (){
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setCard(null);
    }

    function handleCardClick (card){
      setCard(card)
    }
  return (
    <>
      <div className="page">
        <Header />
        <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        isOpen={[
          isEditProfilePopupOpen,
          isAddPlacePopupOpen,isEditAvatarPopupOpen
        ]}
        onClose={closePopups}
        onCardClick={handleCardClick}
        isCard={isCard}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
