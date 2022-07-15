import { categoriesHandler } from "./categories";
import { usersHandler } from "./users";

export const handlers = [...categoriesHandler, ...usersHandler];
