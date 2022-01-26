import { GetterTree } from "vuex";
import { RootState, StateType } from "./interface";

const getters: GetterTree<StateType, RootState> = {
  getUserData: (state: StateType) => {
    return state.user_info;
  },
  setUserData: (state: StateType) => {
    return state.user_data;
  },
  setPlayerData: (state: StateType) => {
    return state.player_data;
  },
  getUserUidData: (state: StateType) => {
    return state.user_info.uid;
  },
};

export default getters;
