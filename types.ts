export type Episode = {
  id: string;
  number: number;
  title: string;
  locked: boolean;
  duration: string;
  videoUrl?: string;
};

export type Drama = {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  poster: string;
  banner: string;
  score: number;
  views: string;
  status?: "draft" | "published";
  episodes: Episode[];
};

export type RootStackParamList = {
  Tabs: undefined;
  Player: { dramaId: string; episodeId?: string };
  Vip: undefined;
};
