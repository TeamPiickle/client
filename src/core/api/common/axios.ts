import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export const realReq = {
  GET_SWR(path: string) {
    return axiosInstance.get(path);
  },

  async GET<T>(path: string, option?: { params: string }) {
    const data = await axiosInstance.get<T>(path, option);
    return data.data;
  },

  async POST<T>(path: string, body: T) {
    const data = await axiosInstance.post(path, body);
    return data.data;
  },

  async PUT<T>(path: string, body: T) {
    const data = await axiosInstance.put(path, body);
    return data.data;
  },

  async PATCH<T>(path: string, body: T) {
    await axiosInstance.patch(path, body);
  },

  async DELETE<T>(path: string, option?: { params: string }) {
    await axiosInstance.delete<T>(path, option);
  },
};
