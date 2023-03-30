
// import Cards from './components/Cards/Cards.jsx';
// // import SearchBar from './components/SearchBar/SearchBar.jsx';
// // import characters from './data.js' ;  //el primero es un export default y un export, que se juntaban todos en un objeto {}
// import style from "./App.module.css";
// import {useState, useEffect} from "react";
// import Nav from "./components/Nav/Nav.jsx";
// import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import Detail from './components/Detail/Detail.jsx';
// import Form from "./components/Form/Form";
// import About from "./components/About/About.jsx";
// import Favorites from './components/Favorites/Favorites';



 

// function App () {
//   const[characters, setCharacters] = useState([]);
//   const {pathname} = useLocation();
//   // const location = useLocation();
//   const navigate = useNavigate();
//   const [access, setAccess] = useState(false);


//   useEffect(() => {
//     !access && navigate("/")
//   }, [access])
  
//   // CREDENCIAL FAKE

//   const username = "jeroblanco44@gmail.com";
//   const password = "callefalsa123";
  
//   const login = (userData) => {
//     if(userData.username === username && userData.password === password){
//       setAccess(true)
//       navigate("/home");
//     }
//   }

 

//   const onSearch = (id) => {
//     const URL_BASE = "http://localhost:3001/rickandmorty/onsearch";
//     // const KEY = "4a1d31d344af.31ba76e172a1f3fea7a2"

//     if (characters.find((char) => char.id === id)){   
//       return alert("Personaje repetido");
//     }
    
//     fetch(`${URL_BASE}/onsearch/${id}`)   
//        .then((response) => response.json())
//        .then((data) => {
//           if (data.name) {
//             setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//             alert('Algo salió mal');
//           }
//        });
//  };


// const onClose = (id) => {
//   setCharacters(characters.filter((char) => char.id !== id));
// };






// return (
//   <div className={style.fondo}>
//     <Nav onSearch={onSearch} />
//     <Routes>
//       <Route path="/" element={<Form login={login} />} />
//       <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/favorites" element={<Favorites />} />
//       <Route path="/detail/:detailId" element={<Detail />} />
//     </Routes>
//     <div className={style.App}>
//       <div className={style.nav}></div>
//       <div></div>
//     </div>
//   </div>
// );
// }

// export default App;

//////////////////////////////////////////////////////

import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { username, password } from "./utils/consts.js";

function App() {
  //  HOOKS ///////////////////////////////////////////////////////////////////
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //  EVENT HANDLERS /////////////////////////////////////////////////////////////
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";
    const KEY = "4a1d31d344af.31ba76e172a1f3fea7a2";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {

    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  //  RENDER ////////////////////////////////////////////
  return (
    <div className={style.fondo}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
