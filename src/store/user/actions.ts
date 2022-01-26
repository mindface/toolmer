import { ActionTree } from "vuex";
import axios from "axios";

import {
  UserData,
  RootState,
  StateType,
  SendLoginData,
  NewUserData,
  PlayerData
} from "./interface";

const config = {
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};
const config_image = {
  headers: {
    "Content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
};

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut, User } from 'firebase/auth'

const actions: ActionTree<StateType, RootState> = {
  getData: async ({ commit }, user_data: UserData[]) => {
    commit("addSettingData", user_data);
  },
  async setUserAction({ commit }) {
    const res = await axios.get(
      `http://localhost:3001/api/v1/user_player`,
      config
    );
    if (res.status < 400) {
      commit("setUserData", res.data);
    }
  },
  async setPlayerAction({ commit }) {
    const id = localStorage.getItem("argent-id")
    const res = await axios.get(
      `http://localhost:3001/api/v1/users/${id}`,
      config
    );
    if (res.status < 400) {
      const data = res.data
      const sendData = {
        name: data.name,
        nickname: data.nickname,
        email: data.email,
        role: data.role,
      }
      commit("setPlayerData", sendData);
    }
  },
  loginAction: async ({ commit }, login_data: SendLoginData) => {
    const res = await axios.post(
      `http://localhost:3001/api/v1/auth/sign_in`,
      login_data
    );
    if (res.status < 400) {
      localStorage.setItem("access-token", res.headers["access-token"]);
      localStorage.setItem("client", res.headers.client);
      localStorage.setItem("uid", res.headers.uid);
      localStorage.setItem("token-type", res.headers["token-type"]);
      localStorage.setItem("argent-id", res.data.data.id);
      localStorage.setItem("nickname", res.data.data.nickname);
      localStorage.setItem("role", res.data.data.role);
      const sendData: UserData = {
        client: res.headers.client,
        "access-token": res.headers["access-token"],
        uid: res.headers.uid,
      };
      commit("addUserData", sendData);
    }
  },
  logoutAction({ commit }) {
    localStorage.setItem("access-token", "");
    localStorage.setItem("client", "");
    localStorage.setItem("uid", "");
    localStorage.setItem("token-type", "");
    localStorage.setItem("nickname", "");
    localStorage.setItem("role", "");
    const sendData: UserData = {
      client: "",
      "access-token": "",
      uid: "",
    };
    commit("addUserData", sendData);
  },
  async setReadaidAction({ commit }) {
    const user_id = localStorage.getItem("user-id");
    const res = await axios.get(
      `http://localhost:3001/api/v1/readaids`,
      config
    );
    if (res.status < 400) {
      commit("addSettingData", res.data);
    }
  },
  async addUserAction({ commit,dispatch },send_data:NewUserData) {
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
    const res = await axios.post(
      `http://localhost:3001/api/v1/users`,
      sendData,
      config
    );
    if (res.status < 400) {
      dispatch("setUserAction");
    }
  },
  async updateUserAction({ commit,dispatch },send_data:PlayerData) {
    const user_id = localStorage.getItem("argent-id");
    const form = new FormData();
    form.append('user[name]',send_data.name);
    form.append('user[nickname]',send_data.nickname);
    form.append('user[email]',send_data.email);
    form.append('user[role]',send_data.role);
    const res = await axios.patch(
      `http://localhost:3001/api/v1/users/${user_id}`,
      form,
      config
    );
    if (res.status < 400) {
      console.log(res.data)
      if(res.data.status === 200){
        alert('更新されました。')
      }
      dispatch("setPlayerAction");
    }
  },
  async deleteUserAction({ commit,dispatch },id:number) {
    const user_id = localStorage.getItem("user-id");
    const res = await axios.delete(
      `http://localhost:3001/api/v1/users/${id}`,
      config
    );
    if (res.status < 400) {
      dispatch("setUserAction");
    }
  },

  async signAction({ commit,dispatch }) {
    console.log('::::')
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const user_id = localStorage.getItem("user-id");
    try {
      const res = await signInWithPopup(auth,provider)  
      console.log(res)
    } catch (error) {
      
    }
    
      // dispatch("setUserAction");
  },
};

export default actions;
