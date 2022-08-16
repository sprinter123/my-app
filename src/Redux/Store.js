import { createStore } from "redux";
import reducers from "./redusers/redusers";

export const Store = createStore(reducers);
