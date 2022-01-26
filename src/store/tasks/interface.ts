export interface RootState {
  version: string;
}

export type StateType = {
  applicationMessage: string;
  task: Task;
  tasks: Task[];
};

export type Task = {
  id: string | number;
  title: string;
  disc_content: string;
  user_name: string;
  play_item: number;
  clear_item: number;
  created_at: string;
  updated_at: string;
 }

export interface TaskData {
  client?: string;
  "access-token"?: string;
  uid?: string;
}

export interface AddTaskData {
  id?: number,
  name: string;
  nickname: string;
  email: string;
  role: string;
  group_id: number;
  password: string;
  password_confirmation: string;
}

export interface SetTaskData {
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

export interface SendTaskData {
  provider: string;
  uid: string,
  allow_password_change: boolean,
  name: string,
  nickname: string,
  image: string | null,
  email: string,
}

