import { ballotsHandler } from "./ballots";
import { cardsHandler } from "./cards";
import { categoriesHandler } from "./categories";

export const handlers = [...categoriesHandler, ...cardsHandler, ...ballotsHandler];
