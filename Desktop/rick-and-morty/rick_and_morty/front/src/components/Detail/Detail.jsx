// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// const Detail = () => {
//     const {detailId} = useParams(); 

//     const [character, setCharacter] = useState({});
    
        
//     useEffect (() => {
//     const URL_BASE = "https://be-a-rym.up.railway.app/api";
//     const KEY = "4a1d31d344af.31ba76e172a1f3fea7a2";

//      axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
//         setCharacter(response.data)
//      );
//     }, []);

//     return (
//         <div>
//             {
//             character.name ?(
//             <>
//             <h2>{character.name}</h2>
//             <p>{character.status}</p>
//             <p>{character.species}</p>
//             <p>{character.gender}</p>
//             <p>{character.origin?.name}</p>
//             <img src = {character.imagen} alt = "img" />
                
//                 </>
//                 ) : (
//                 <h3>Loading...</h3>
//             )}
            
//         </div>
//     );
// };

// export default Detail;

/////////////////////////////////////////////////////////////////////

import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
  const character = useCharacter();

  return (
    <div>
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;