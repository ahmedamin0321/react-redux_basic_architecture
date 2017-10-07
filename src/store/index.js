import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

// creating the function so we can just combine every reducers we have in the app 
let rootReducer=combineReducers({
    // your reducer name
});

// initializing middleware function
const middleWare=applyMiddleware(thunk);

// initializing the store
let store=createStore(
    rootReducer,
    middleWare
)

// if you want to check state on every action despatched, you can create subscribe method
store.subscribe(()=>{
    // Right now, I'm logging the current state
    console.log("state:",store.getState());
})

export default store