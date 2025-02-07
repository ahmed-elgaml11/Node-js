import {z} from  'zod';

const UserSchema = z.object({
    fullName: z.string().regex(/^[\D]+$/,"Full name cannot contain numbers"),
    email: z.string().email("Invalid email"),
    password:z.string().min(8).max(64,"password must be 8 and 64 char")
    .regex(/[0-9]+/, "at least one number")
    .regex(/[a-z]+/, "at least one lowercase letter")
    .regex(/[A-Z]+/, "at least one uppercase letter"),
    confirmPassword: z.string()
}).refine(val => val.confirmPassword === val.password,{
    message: "Passwords do not match"
})
export {UserSchema}
