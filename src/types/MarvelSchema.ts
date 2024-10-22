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

export const charactersSchema = z.object({
  count: z.number(),
  limit: z.number(),
  offset: z.number(),
  results: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      description: z.string(),
      thumbnail: z.object({
        extension: z.string(),
        path: z.string(),
      }),
      comics: z.object({
        items: z.array(
          z.object({
            resourceURI: z.string(),
            name: z.string(),
          })
        ),
      }),
      series: z.object({
        items: z.array(
          z.object({
            resourceURI: z.string(),
            name: z.string(),
          })
        ),
      }),
    })
  ),
});

export const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  thumbnail: z.object({
    path: z.string(),
    extension: z.string(),
  }),
  comics: z.object({
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
  series: z.object({
    items: z.array(
      z.object({
        resourceURI: z.string(),
        name: z.string(),
      })
    ),
  }),
});

export type character = z.infer<typeof characterSchema>;
export type characterType = z.infer<typeof charactersSchema>;
export type MarvelType = z.infer<typeof MarvelSchema>;
