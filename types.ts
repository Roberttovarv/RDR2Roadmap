export interface Mission {
  ID: number;
  sym: string;
  has_progress: boolean;
  given_by: string | null;
  mission_en: string;
  mission_es: string;
  starting_at_en: string;
  ending_at_en: string;
  starting_at_es: string;
  ending_at_es: string;
  chapter: number;
  deadline: string | null;
  notes_en: string | null;
  notes_es: string | null;
  completed: boolean;
}

export type RootStackParamList = {
  Chapters: undefined;
  Chapter: { chapter: number | string };
  MissionDetails: { mission: Mission };
  MissionList: {mission: Mission}
  Type: {sym: string}
};
export type DrawerParamList = {
  Main: undefined;          
  SymbolsGuide: undefined;
  About: undefined;
  YourProgress: undefined;
};