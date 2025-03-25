import {z} from 'zod';


export const todoSchema = z.object({
    content: z.string().min(3),
    done: z.boolean()
})

export type todo = z.infer<typeof todoSchema>;