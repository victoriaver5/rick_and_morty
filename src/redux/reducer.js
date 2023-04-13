import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./actions-types"

const initialState = {
    myFavorites : [],
    allcharacterFav:[]
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
        return{
            ...state,
            myFavorites:[...state.allcharacterFav, payload],
            allcharacterFav: [...state.allcharacterFav,payload]
        }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myfavorites.filter (fav => fav.id !== payload)

            }

        case FILTER:
            const allcharacterFiltered= state.allcharacterFav.filter(character=> character.gender === payload)
            return{
                ...state,
                myFavorites:
                payload === "allCharacters"
                ?[...state.allcharacterFav]
                :allcharacterFiltered
            }
            
        case ORDER:
            const allcharacterFavCopy = [...state.allcharacterFav]
            return{
                ...state,
                myFavorites:
                payload=== "A"
                ? allcharacterFavCopy.sort ((a,b)=> a.id - b.id)
                : allcharacterFavCopy.sort ((a,b) => b.id - a.id)
            }


    
        default:
           return {...state}
    }
}

export default reducer;