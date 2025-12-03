import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";
import { ICategory } from "../types";

interface CategoryCreationAttributes extends Optional<ICategory, "id" | "createdAt" | "updatedAt"> {}

export class Category extends Model<ICategory, CategoryCreationAttributes> implements ICategory {
  public id!: number;
  public title!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Category",
  }
);
