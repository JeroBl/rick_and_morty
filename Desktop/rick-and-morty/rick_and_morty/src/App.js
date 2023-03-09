
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters from './data.js'   //el primero es un export default y un export, que se juntaban todos en un objeto {}
import style from "./App.module.css"


function App () {
  return (
    <div className={style.fondo}>
    <div className = {style.App}>
        <div className= {style.nav}>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters = {characters} />
      </div>
    
    </div>
    </div>
  );
}


export default App
