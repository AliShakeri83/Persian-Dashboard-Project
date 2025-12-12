import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";
import { IComment } from "../types";

interface CommentCreationAttributes
  extends Optional<IComment, "id" | "createdAt" | "updatedAt"> {}

export class Comment extends Model<IComment, CommentCreationAttributes>
  implements IComment {
  public id!: number;
  public body!: string;
  public date!: string;
  public hour!: string;
  public userID!: number;
  public username!: string;
  public productID!: number;
  public productName!: string;
  public isAction!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAction: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Comment",
  }
);
