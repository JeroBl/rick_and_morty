import style from "./Card.module.css";

export default function Card({name,species,gender,image,onClose}) {
   return (
      <div className = {style.container}>
         <button onClick={onClose} className = {style.closeButton}>
            X
            </button>
         <img  src={image} className = {style.imageStile} alt="" />
         <h2 className = {style.nameStile}>Name: {name} </h2>
         <h2 className = {style.speciesStile}>Species: {species} </h2>
         <h2 className = {style.genderStile}>Gender: {gender} </h2>
      </div>
   );
}
