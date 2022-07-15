import axios from "axios";

const real = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const realReq = {
  async GET(path: string) {
    const { data } = await real(path);
    return data;
  },

  async POST(path: string, body: any) {
    const { data } = await real.post(`/${path}`, body);
    return data;
  },

  async PATCH(path: string, body: any) {
    await real.patch(path, body);
  },

  async DELETE(path: string, body: any) {
    await real.delete(path, body);
  },
};
