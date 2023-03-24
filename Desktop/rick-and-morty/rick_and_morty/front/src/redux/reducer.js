import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
      };

    case FILTER:
      const { allCharacters } = state;
      const filteredCharacters = allCharacters.filter((char) => char.gender === action.payload);
      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      const { allCharacters: chars } = state;
      const sortedCharacters = chars.sort((a, b) => {
        if (action.payload === "Ascendente") {
          return a.id - b.id;
        } else if (action.payload === "Descendente") {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
