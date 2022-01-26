export interface RootState {
  version: string;
}

export interface StateType {
  readaid_data: ReadaidData[];
}

export interface ReadaidData {
  id: number;
  title: string;
  body: string;
  reedtag_id: number;
  created_at: string;
  updated_at: string;
}

export interface SendReadaidData {
  title: string;
  body: string;
  reedtag_id: number;
}

export interface ReadaidImageData {
  id: number;
  caption: string;
  image_path: string;
}
