import axios from "axios";

const real = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

real.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
    "x-auth-token": `Bearer ${localStorage.getItem("piickle-token")}`,
  };

  return { ...config, headers };
});

export const realReq = {
  // GET은 swr 라이브러리로 대체합니다
  GET_SWR(path: string) {
    return real.get(path);
  },

  async GET<T>(path: string) {
    const data = await real.get<T>(path);
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
