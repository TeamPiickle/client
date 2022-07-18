interface Response<T> {
  data: { cardList: T };
}

export interface SWRResponse<T> {
  data: Response<T>;
}
