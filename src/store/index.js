import { createStore } from "redux";
import { contacts } from "../static-data";
import reducer from "../reducers";

export const store = createStore(reducer, { contacts });
