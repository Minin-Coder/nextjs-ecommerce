import { date } from './../node_modules/zod/src/v4/core/regexes';
import { z } from "zod";

import { insertProductSchema } from "../lib/validator";

export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    rating: string;
    createdAt : Date;
}