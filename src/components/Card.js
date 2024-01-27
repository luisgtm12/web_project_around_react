import trasIcon from '../images/trash-icon.png';
import likeIcon from '../images/corazon.png';

function Card ({card, id, onCardClick}){
  function handleOnCardClick (){
    onCardClick(card);
  }
  return(
    <>
    <div className="card">
          <div className="places-card" id={id}>
            <img
              src={trasIcon}
              id="tras-icon"
              className="places-card__trash"
              alt="tachito de basura"
            />
            <img
              src={card.link}
              alt={`Photo de ${card.name}`}
              className="places-card__image"
              onClick={handleOnCardClick}
            />
            <div className="places-card__contain">
              <p className="places-card__contain_title">{card.name}</p>
              <div>
                <img
                  src={likeIcon}
                  id="like-0"
                  alt="icono de corazon"
                  className="places-card__contain_like"
                />
                <p className="places-card__contain_like-count">{card?.likes?.length || ''}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default Card;