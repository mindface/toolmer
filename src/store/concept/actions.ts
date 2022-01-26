import { ActionTree } from "vuex";
import {
  Concept,
  RootState,
  StateType,
  AddConceptData,
} from "./interface";
export const getConfig = {
  methods: 'GET',
  headers: {
    "Content-type": "application/json",
  },
};
export const deleteConfig = {
  methods: 'DELETE',
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
export const sendConfig = <T>(type:string,data:T):any => {
  return {
    methods: type,
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data)
  };
}


const actions: ActionTree<StateType, RootState> = {
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
  async setUserAction({ commit }) {
    const res = await fetch(
      `http://localhost:3001/api/v1/user_player`,
      getConfig
    );
    const data = await res.json()
    if (res.status < 400) {
      commit("setUserData", data);
    }
  },
  async addTaskAction({ commit,dispatch },send_data:AddConceptData) {
    const sendData = {
      user: {
        name:send_data.name,
        nickname:send_data.nickname,
        role:send_data.role,
        email:send_data.email,
        group_id:send_data.group_id,
        password:send_data.password,
        password_confirmation:send_data.password_confirmation
      }
    };
    const res = await fetch(
      `http://localhost:3001/api/v1/users`,
      sendConfig<AddConceptData>('POST',send_data)
    );
    const data = await res.json()
    if (data) {
      dispatch("setUserAction");
    }
  },
  async updateUserAction({ commit,dispatch },send_data:AddConceptData) {
    // const user_id = localStorage.getItem("argent-id");
    // const form = new FormData();
    // form.append('user[name]',send_data.name);
    // form.append('user[nickname]',send_data.nickname);
    // form.append('user[email]',send_data.email);
    // form.append('user[role]',send_data.role);
    const res = await fetch(
      `http://localhost:3001/api/v1/users/${send_data.id}`,
      sendConfig<AddConceptData>('PUT',send_data)
    );
    const data = await res.json()
    if (data) {
      console.log(data)
      alert('更新されました。')
      dispatch("setPlayerAction");
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
};

export default actions;
