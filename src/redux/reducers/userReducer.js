import userState from "../state/userState";
import {
    Get_Albums,
    Set_My_Favourite_Albums,
} from "../actionTypes/userActionTypes";


const userReducer = (initialState = userState, action) => {
    let state = JSON.parse(JSON.stringify(initialState));

    switch (action.type) {

        case Get_Albums: {
            console.log(action.payload);
            state.albums = action.payload;
            state.usersArray = action.usersArray;
            console.log(state);
            return state;
        }

        case Set_My_Favourite_Albums: {
            console.log(action.payload);
            state.myFavouriteAlbums = action.payload;
            console.log(state);
            return state;
        }

        default:
        return state;
    }
}

export default userReducer;