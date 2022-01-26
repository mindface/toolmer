import { MutationTree } from "vuex";
import { Task, SetTaskData, StateType } from "./interface";

const mutations: MutationTree<StateType> = {
  addSettingData: (state, data: Task[]) => {
    state.tasks = data;
  },
  setTaskData: (state, data: Task[]) => {
    state.tasks = data;
  },
  // setPlayerData: (state, data: Task) => {
  //   state.player_data = data;
  // },
  addTaskData: (state, data: Task) => {
    state.task = data;
  },
  setApplicationMssage: (state, mesaage: string) => {
    state.applicationMessage = mesaage;
  },
};

export default mutations;
