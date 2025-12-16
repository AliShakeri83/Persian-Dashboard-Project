import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";
import { IUser } from "../types";

interface UserCreationAttributes
  extends Optional<IUser, "id" | "createdAt" | "updatedAt"> {}

export class Users extends Model<IUser, UserCreationAttributes>
  implements IUser {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
  public username!: string;
  public password!: string;
  public phone!: string;
  public city!: string;
  public email!: string;
  public address!: string;
  public score!: bigint;
  public buy!: bigint;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    score: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    buy: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);
