import {z} from 'zod';
import {userSchema} from '../../schema/userSchema'

export type userInput = z.infer<typeof userSchema>

export interface userDb extends Omit<userInput, 'password'> {
    hashedPassword: string;
}
