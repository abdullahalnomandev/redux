import { createStore } from "redux";
import cartReducers from "../reducers/CartReducer";

export const store = createStore(cartReducers)