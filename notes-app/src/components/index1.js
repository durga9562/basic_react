import { combineReducers } from "redux";
import {reducer as formReducer} from "redux-form";
import noteReducer from "./reducers";

const rootReducer =combineReducers({
    form:formReducer,
    notes:noteReducer
})
export default rootReducer;
