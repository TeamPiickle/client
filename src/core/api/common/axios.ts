import axios from "axios";

// REAL_BASE_URL 수정해줘야 합니다
const REAL_BASE_URL = "http://13.125.254.72:8000";

const real = axios.create({
  baseURL: REAL_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const realReq = {
  async GET(path: string) {
    const { data } = await real(path);
    return data;
  },

  async POST(path: string, body) {
    const { data } = await real.post(`/${path}`, body);
    return data;
  },

  async PATCH(path: string, body) {
    await real.patch(path, body);
  },

  async DELETE(path: string, body) {
    await real.delete(path, body);
  },
};
