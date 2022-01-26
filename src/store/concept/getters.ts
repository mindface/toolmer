import { GetterTree } from "vuex";
import { RootState, StateType } from "./interface";

const getters: GetterTree<StateType, RootState> = {
  getConceptData: (state: StateType) => {
    return state.concept;
  },
  getConceptsData: (state: StateType) => {
    return state.concepts;
  },
  setConceptData: (state: StateType) => {
    return state.concept;
  },
};

export default getters;
