import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

// bring reducers

import userReducer from "./reducers/userReducer";

// function to save redux state to session storage

const saveToSessionStorage = (state) => {
    try {
        const serializedSessionState = JSON.stringify(state);
        sessionStorage.setItem('redux_store_session_state', serializedSessionState);
    } catch (error) {
        console.log(error);
    }
}

// function to load redux state from session storage

const loadFromSessionStorage = () => {
    try {
        let serializedSessionState = sessionStorage.getItem('redux_store_session_state');
        if (serializedSessionState === null) {
            return undefined;
        }
        return JSON.parse(serializedSessionState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

// variable to hold loaded session state

const persistedSessionState = loadFromSessionStorage()

// function to save redux state to local storage

// const saveToLocalStorage = (state) => {
//     try {
//         const serializedLocalState = JSON.stringify(state);
//         localStorage.setItem('redux_store_local_state', serializedLocalState);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function to load redux state from Local storage

// const loadFromLocalStorage = () => {
//     try {
//         let serializedLocalState = localStorage.getItem('redux_store_local_state');
//         if (serializedLocalState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedLocalState);
//     } catch (error) {
//         console.log(error);
//         return undefined;
//     }
// }

// // variable to hold loaded local state

// const persistedLocalState = loadFromLocalStorage();

// const initialState = {
//     local: persistedLocalState,
//     session: persistedSessionState,
// }

const initialState = persistedSessionState;

const rootReducer = combineReducers({
    userState: userReducer
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const globalState = store.getState();
console.log(globalState)

// save redux state to session storage and local storage

store.subscribe(()=>{
    // saveToLocalStorage(globalState.local);
    saveToSessionStorage(globalState);
});

export default store;