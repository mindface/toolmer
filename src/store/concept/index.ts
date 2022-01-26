import { Module } from "vuex";
import { RootState, StateType } from "./interface";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export const state: StateType = {
  applicationMessage: "",
  concept: {
    id: 0,
    title: "loding ...",
    disc_content: "loding ...",
    disabled: false,
    created_at: "2021-04-25T11:20:56.006Z",
    updated_at: "2021-04-25T11:20:56.006Z",
  },
  concepts: [
    {
      id: 0,
      title: "情報処理モデル",
      disc_content: "loding ...",
      disabled: false,
    },
    {
      id: 0,
      title: "情報処理モデル02",
      disc_content: "loding ...",
      disabled: false,
    },
    {
      id: 0,
      title: "情報処理モデル03",
      disc_content: "loding ...",
      disabled: false,
    },
    {
      id: 0,
      title: "情報処理モデル04",
      disc_content: "loding ...",
      disabled: false,
    },
  ]
};

export const concept: Module<StateType, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
