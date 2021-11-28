import axios from "axios";
import {
    Get_Albums,
    Set_My_Favourite_Albums,
} from "../actionTypes/userActionTypes";
import sortUsersAlbum from "../../utils/sortUsersAlbum";


export const getAlbums = () => async (dispatch) => {
    try {
        let res = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        console.log(res)
        if (res?.status === 200) {
            let usersArray = await sortUsersAlbum(res?.data);
            console.log(usersArray)
            await dispatch({
                type: Get_Albums,
                payload: res?.data,
                usersArray: usersArray,
            })
        }
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const setMyFavouriteAlbums = (albums) => async (dispatch) => {
    try {
        await dispatch({
            type: Set_My_Favourite_Albums,
            payload: albums,
        })
    } catch (error) {
        console.log(error);
    }
}