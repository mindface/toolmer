export interface RootState {
  version: string;
}

export type StateType = {
  applicationMessage: string;
  user_info: UserData;
  user_data: SetUserData[];
  player_data: PlayerData;
};

export interface UserData {
  client?: string;
  "access-token"?: string;
  uid?: string;
}

export interface PlayerData {
  name: string;
  nickname: string;
  email: string;
  role: string;
}

export interface NewUserData {
  name: string;
  nickname: string;
  email: string;
  role: string;
  group_id: number;
  password: string;
  password_confirmation: string;
}

export interface SetUserData {
  id: number;
  provider: string;
  uid: string,
  allow_password_change: boolean,
  name: string,
  nickname: string,
  image: string | null,
  email: string,
  role: string,
  created_at: string;
  updated_at: string;
}

export interface SendUserData {
  title: string;
  body: string;
  reedtag_id: number;
}

export interface ReadaidImageData {
  id: number;
  caption: string;
  image_path: string;
}

export interface SendLoginData {
  email: string;
  password: string;
}

export interface GetLoginData {
  allow_password_change: boolean;
  email: string;
  id: number;
  image: null;
  name: string;
  nickname: string;
  provider: string;
  role: string;
  uid: string;
}
