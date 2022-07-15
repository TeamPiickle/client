import { ballotsHandler } from "./ballots";
import { cardsHandler } from "./cards";
import { categoriesHandler } from "./categories";
import { usersHandler } from "./users";

export const handlers = [...categoriesHandler, ...cardsHandler, ...ballotsHandler, ...usersHandler];
