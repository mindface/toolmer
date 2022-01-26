import { InjectionKey } from 'vue'
import Vuex, { StoreOptions, createStore, Store, useStore as baseUseStore } from "vuex";
// import { RootState } from "./rootInterface";
// import { user } from "./user";
import { StateType as ConceptStateType } from "./concept/interface";
import actions, { getConfig, deleteConfig } from "./concept/actions";
import mutations from "./concept/mutations";

export interface RootState {}
const state: RootState = {}

export interface TypeState extends RootState {
  concept: ConceptStateType
}

export const key: InjectionKey<Store<TypeState>> = Symbol()

export const store = createStore({
  state: {
    applicationMessage: "",
    concept: {
      id: 1,
      title: "loding ...",
      disc_content: "loding ...",
      disabled: false,
      created_at: "2021-04-25T11:20:56.006Z",
      updated_at: "2021-04-25T11:20:56.006Z",
    },
    concepts: [
      {
        id: 1,
        title: "情報処理モデル",
        disc_content: "loding ...",
        disabled: false,
      },
      {
        id: 2,
        title: "情報処理モデル02",
        disc_content: "loding ...",
        disabled: false,
      },
      {
        id: 3,
        title: "情報処理モデル03",
        disc_content: "loding ...",
        disabled: false,
      },
      {
        id: 4,
        title: "情報処理モデル04",
        disc_content: "loding ...",
        disabled: false,
      },
    ]
  },
  getters: {
    getConceptData: (state) => {
      return state.concept;
    },
    getConceptsData: (state) => {
      return state.concepts;
    },
  },
  actions: {
    getTask: async ({ commit }) => {
      const res = await fetch(
        'http://localhost:8008/logtool/base_tasks',
        getConfig
      );
      const data = await res.json()
      if (res.status < 400) {
        console.log(data)
        commit("setTaskData", data);
      }
    },
    async deleteUserAction({ commit,dispatch },id:number) {
      const res = await fetch(
        `http://localhost:3001/api/v1/users/${id}`,
        deleteConfig
      );
      const data = await res.json()
      if (data) {
        dispatch("setUserAction");
      }
    }
  },
  mutations: mutations,
});

// export default new Store<RootState>(store);

export function useStore(){
  return baseUseStore(key)
}
