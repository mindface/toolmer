import { MutationTree } from "vuex";
import { Concept, SetConceptData, StateType } from "./interface";

const mutations: MutationTree<StateType> = {
  addSettingData: (state, data: Concept[]) => {
    state.concepts = data;
  },
  setTaskData: (state, data: Concept[]) => {
    state.concepts = data;
  },
  // setPlayerData: (state, data: Task) => {
  //   state.player_data = data;
  // },
  addTaskData: (state, data: Concept) => {
    state.concept = data;
  },
  setApplicationMssage: (state, mesaage: string) => {
    state.applicationMessage = mesaage;
  },
};

export default mutations;
