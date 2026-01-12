
import { z } from 'zod';
/*
export const createRecipeSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
  }),
});
*/

export const queryRecipeSchema = z.object({
  query: z.object(
    {
      type: z.enum(['RECIPE', 'INGREDIENT']).optional(),
    },
    {
      required_error: 'query is required',
      invalid_type_error: 'query must be an object',
    }
  ),
});