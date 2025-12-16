import { Users } from "../models/User";
import { IUser } from "../types";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const createUser = async (data: IUser) => {
  const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

  const user = await Users.create({
    ...data,
    password: hashedPassword,
  });

  return user;
};


export const getAllUsers = async () => {
  return await Users.findAll({
    attributes: { exclude: ["password"] },
  });
};

export const getUserById = async (id: number) => {
  const user = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });

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
