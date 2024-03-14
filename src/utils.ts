export enum API_URL {
  GET_ALL_POSTS = "post/get",
  GET_SINGLE_POST = "post/get/:id",
  // GET_ALL_POSTS = "post/get",
}

export const createMarkup = (value: string) => {
  return { __html: value }
}
