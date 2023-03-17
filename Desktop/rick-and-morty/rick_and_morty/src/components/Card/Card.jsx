import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({id, name,species,gender,image,onClose}) {
   return (
      <div className = {style.container}>
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
