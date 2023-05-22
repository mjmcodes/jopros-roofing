import { z, defineCollection } from "astro:content";

const servicesCollection = defineCollection({
   type: "content",
   schema: z.object({
      title: z.string(),
      image: z.object({
         url: z.string(),
         alt: z.string(),
      }),
      exerpt: z.string(),
   }),
});

const projects = defineCollection({
   type: "data",
   schema: z.object({
      image: z.string(),
      category: z.string(),
   }),
});

export const collections = {
   services: servicesCollection,
};
