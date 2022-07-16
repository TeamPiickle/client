import axios from "axios";

const real = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const realReq = {
  async GET(path: string) {
    const data = await real(path);
    return data.data;
  },

  async POST<T>(path: string, body: T) {
    const data = await real.post(`/${path}`, body);
    return data.data;
  },

  async PATCH<T>(path: string, body: T) {
    await real.patch(path, body);
  },

  async DELETE<T>(path: string, body: T) {
    await real.delete(path, body);
  },
};
