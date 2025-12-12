import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";
import { IDiscount } from "../types";

interface DiscountCreationAttributes
  extends Optional<IDiscount, "id" | "createdAt" | "updatedAt"> {}

export class Discount extends Model<IDiscount, DiscountCreationAttributes>
  implements IDiscount {
  public id!: number;
  public code!: string;
  public precent!: number;
  public productID!: number;
  public productName!: string;
  public date!: string;
  public isActive!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Discount.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precent: {
      type: DataTypes.INTEGER,
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
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Discount",
  }
);
