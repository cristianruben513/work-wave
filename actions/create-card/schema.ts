import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string({
      required_error: "Titulo requerido",
      invalid_type_error: "Titulo requerido",
    }).min(3, {
      message: "Title is too short",
    }),
  boardId: z.string(),
  listId: z.string(),
});
