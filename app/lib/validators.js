import { z } from "zod";

export const projectSchema = z.object({
  name: z
    .string()
    .min(1, "Project name is required")
    .max(100, "Project name is too long"),
  key: z
    .string()
    .min(2, "Project key is required")
    .max(10, "Project key is too long"),
  description: z.string().max(500, "Description is too long").optional(),
});

export const sprintSchema = z.object({
  name: z.string().min(1, "Sprint name is required"),
  startDate: z.date(),
  endDate: z.date(),
});
