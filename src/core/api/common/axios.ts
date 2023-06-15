import axios from "axios";

import { USER_TOKEN } from "./constants";

const real = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

real.interceptors.request.use((config) => {
  if (localStorage.getItem(USER_TOKEN) === null) return { ...config };

  const headers = {
    ...config.headers,
    "x-auth-token": `Bearer ${localStorage.getItem(USER_TOKEN)}`,
  };
  return { ...config, headers };
});

export const realReq = {
  GET_SWR(path: string) {
    return real.get(path);
  },

  async GET<T>(path: string, option?: { params: string }) {
    const data = await real.get<T>(path, option);
    return data.data;
  },

  async POST<T>(path: string, body: T) {
    const data = await real.post(path, body);
    return data.data;
  },

  async PUT<T>(path: string, body: T) {
    const data = await real.put(path, body);
    return data.data;
  },

  async PATCH<T>(path: string, body: T) {
    await real.patch(path, body);
  },
};
