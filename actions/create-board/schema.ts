import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "Titulo requerido",
      invalid_type_error: "Titulo requerido",
    }).min(3, {
      message: "Title is too short."
    }),
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Image is required",
  }),
});
