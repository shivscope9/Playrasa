import { emptyLibrary } from "./data";
import { Drama } from "./types";
import { Platform } from "react-native";

const API_URL = Platform.OS === "android" ? "http://10.0.2.2:4100" : "http://localhost:4100";

export async function getDramas(): Promise<Drama[]> {
  try {
    const response = await fetch(`${API_URL}/api/dramas`);
    if (!response.ok) {
      throw new Error(`API failed with ${response.status}`);
    }
    const data = (await response.json()) as Drama[];
    return data.filter((drama) => drama.status !== "draft");
  } catch {
    return emptyLibrary;
  }
}

export async function getDrama(id: string): Promise<Drama | undefined> {
  const dramas = await getDramas();
  return dramas.find((drama) => drama.id === id);
}
