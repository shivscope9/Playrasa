import { Drama } from "./types";

export const emptyLibrary: Drama[] = [];

export const categories = ["All", "New", "Featured", "Free", "Series"];

export const rewardTasks = [
  { id: "check-in", title: "Daily check-in", reward: "+20 coins", done: false },
  { id: "watch", title: "Watch uploaded episodes", reward: "+50 coins", done: false },
  { id: "share", title: "Share PLAYRASA", reward: "+15 coins", done: false }
];
