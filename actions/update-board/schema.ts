import { z } from "zod";

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Titulo requerido",
      invalid_type_error: "Titulo requerido",
    })
    .min(3, {
      message: "Titulo muy corto",
    }),
  id: z.string(),
});
