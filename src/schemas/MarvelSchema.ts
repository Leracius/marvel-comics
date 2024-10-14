import { z } from "zod";

export const MarvelSchema = z.object({
  count: z.number(),
  limit: z.number(),
  offset: z.number(),
  results: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      thumbnail: z.object({
        extension: z.string(),
        path: z.string(),
      }),
    })
  ),
});

export type MarvelType = z.infer<typeof MarvelSchema>;
