import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../models/user.model";

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input);
    // Nao vai retorna a senha do user criado
    return omit(user.toJSON(), "password");
  } catch (error: any) {
    throw new Error(error);
  }
}
