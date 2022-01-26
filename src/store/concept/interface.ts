export interface RootState {
  version: string;
}

export type StateType = {
  applicationMessage: string;
  concept: Concept;
  concepts: Concept[];
};

export type Concept = {
  id: string | number;
  title: string;
  disc_content: string;
  disabled: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ConceptData {
  client?: string;
  "access-token"?: string;
  uid?: string;
}

export interface AddConceptData {
  id?: number,
  name: string;
  nickname: string;
  email: string;
  role: string;
  group_id: number;
  password: string;
  password_confirmation: string;
}

export interface SetConceptData {
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

export interface SendConceptData {
  provider: string;
  uid: string,
  allow_password_change: boolean,
  name: string,
  nickname: string,
  image: string | null,
  email: string,
}

