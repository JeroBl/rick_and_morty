import { Link } from "react-router-dom";
import style from "./Card.module.css";
import {connect} from "react-redux";
import { addfavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect} from "react";

function Card({
   id, 
   name,
   species,
   gender,
   image,
   onClose, 
   addFavorite, 
   removeFavorite,
}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFavorite(id);
         }else{
            setIsFav(true);
            addFavorite({
               id, 
               name,
               species,
               gender,
               image,
               onClose, 
               addFavorite, 
               removeFavorite,
               // myFavorites,
            });
         }
   };


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className = {style.container}>

{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

         <button onClick={() => onClose(id)} className = {style.closeButton}>
            X
            </button>
         <img  src={image} className = {style.imageStile} alt="" />
         <Link to ={`/detail/${id}`} className > 
         <h2 className = {style.nameStile}>Name: {name} </h2>
         </Link>

         <h2 className = {style.speciesStile}>Species: {species} </h2>
         <h2 className = {style.genderStile}>Gender: {gender} </h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      removeFavorite: (id) => {
         dispatch(removeFavorite(id));
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
