import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";
import { IProduct } from "../types";
import { Category } from "./Category";

interface ProductCreationAttributes extends Optional<IProduct, "id" | "createdAt" | "updatedAt"> {}

export class Product extends Model<IProduct, ProductCreationAttributes> implements IProduct {
  public id!: number;
  public title!: string;
  public price!: number;
  public count!: number;
  public img_url!: string;
  public popularity!: number;
  public sale!: boolean;
  public color!: string;
  public description!: string;
  public categoryId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    popularity: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
    },
    sale: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

