

import style from "../Favorites/Favorites";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { getFavorites } from "../../redux/actions";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div className={style.container}>
      {favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
};

export default Favorites;