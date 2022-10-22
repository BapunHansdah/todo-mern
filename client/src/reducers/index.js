//for combining the reducers

import {Auth} from "./List";
import { combineReducers } from "redux";
const reducers = combineReducers({Auth});
export default reducers;