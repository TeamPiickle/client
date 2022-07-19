interface Response<T> {
  data: T;
}

export interface PiickleSWRResponse<T> {
  data: Response<T>;
}
