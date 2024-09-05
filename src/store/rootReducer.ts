import { combineReducers } from "redux";
import menu from "./slice/menu";
import customizationReducer from "./customizationReducer";
import teams from "./slice/teams";

const rootReducer = combineReducers({
  menu: menu,
  customizationReducer: customizationReducer,
  teams: teams,
});

// Define el tipo del estado raíz
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
