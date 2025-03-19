import {z} from 'zod';

export const userSchema = z.object({
    email: z.string().email({message: 'please enter a valid email'}),
    password: z.string().min(3).max(20, {message: 'password must be between 3 and 20 character'})
})

