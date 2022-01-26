import { GetterTree } from "vuex";
import { RootState, StateType } from "./interface";

const getters: GetterTree<StateType, RootState> = {
  getTaskData: (state: StateType) => {
    return state.task;
  },
  setTaskData: (state: StateType) => {
    return state.task;
  },
};

export default getters;
