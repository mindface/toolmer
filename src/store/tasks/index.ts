import { Module } from "vuex";
import { RootState, StateType } from "./interface";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: StateType = {
  applicationMessage: "",
  task: {
    id: 0,
    title: "mo@example.com",
    disc_content: "mo@example.com",
    user_name: "name",
    play_item: 0,
    clear_item: 0,
    created_at: "2021-04-25T11:20:56.006Z",
    updated_at: "2021-04-25T11:20:56.006Z",
  },
  tasks: [
    {
      id: 0,
      title: "mo@example.com",
      disc_content: "mo@example.com",
      user_name: "name",
      play_item: 0,
      clear_item: 0,
      created_at: "2021-04-25T11:20:56.006Z",
      updated_at: "2021-04-25T11:20:56.006Z",
    },
  ]
};

export const tasks: Module<StateType, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
