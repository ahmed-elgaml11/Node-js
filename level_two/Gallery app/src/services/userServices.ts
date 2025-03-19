import User from '../models/users';
import {  userDb, userInput }from '../types/users/users'

export const addUser = async (body: userInput) => {
    const user = new User(body);
    return user.save();
}
export const findUser = async (email: string) => {
    return User.findOne({email: email})
}