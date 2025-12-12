import { Users } from "../models/User";
import { IUser } from "../types";

export const createUser = async (data: IUser) => {
  const user = await Users.create(data);
  return user;
};

export const getAllUsers = async () => {
  return await Users.findAll();
};

export const getUserById = async (id: number) => {
  const user = await Users.findByPk(id);
  if (!user) throw new Error("User not found");
  return user;
};

export const updateUser = async (id: number, data: Partial<IUser>) => {
  const user = await Users.findByPk(id);
  if (!user) throw new Error("User not found");

  await user.update(data);
  return user;
};

export const deleteUser = async (id: number) => {
  const user = await Users.findByPk(id);
  if (!user) throw new Error("User not found");

  await user.destroy();
  return true;
};
