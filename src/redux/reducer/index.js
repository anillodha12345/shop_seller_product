import {combineReducers} from "redux";
import { blogreducer, cartreducer } from "./reducer";


const rootReducer = combineReducers({
    cartreducer,
  blogreducer : blogreducer
});


export default rootReducer
