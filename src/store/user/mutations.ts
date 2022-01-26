import { MutationTree } from "vuex";
import { UserData, SetUserData, StateType, PlayerData } from "./interface";

const mutations: MutationTree<StateType> = {
  addSettingData: (state, data: UserData) => {
    state.user_info = data;
  },
  setUserData: (state, data: SetUserData[]) => {
    state.user_data = data;
  },
  setPlayerData: (state, data: PlayerData) => {
    state.player_data = data;
  },
  addUserData: (state, data: UserData) => {
    state.user_info.client = data.client;
    state.user_info["access-token"] = data["access-token"];
    state.user_info.uid = data.uid;
  },
  setApplicationMssage: (state, mesaage: string) => {
    state.applicationMessage = mesaage;
  },
};

export default mutations;
