import { Module } from "vuex";
import { UserData, RootState, StateType } from "./interface";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: StateType = {
  applicationMessage: "",
  user_info: {
    client: "",
    "access-token": "",
    uid: "",
  },
  user_data: [
    {
      id: 0,
      provider: "email",
      uid: "mo@example.com",
      allow_password_change: false,
      name: "name",
      nickname: "nickname",
      image: null,
      email: "mo@example.com",
      role: "player",
      created_at: "2021-04-25T11:20:56.006Z",
      updated_at: "2021-04-25T11:20:56.006Z",
    },
  ],
  player_data: {
    name: "name",
    nickname: "nickname",
    email: "name",
    role: "player",
  }
};

export const user: Module<StateType, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
