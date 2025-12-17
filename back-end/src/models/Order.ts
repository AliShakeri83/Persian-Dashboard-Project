import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/database";
import { IOrder } from "../types";

interface OrderCreationAttributes
  extends Optional<IOrder, "id" | "createdAt" | "updatedAt"> {}

export class Orders extends Model<IOrder, OrderCreationAttributes>
  implements IOrder {
  public id!: number;
  public productID!: number;
  public productName!: string;
  public userID!: number;
  public username!: string;
  public date!: string;
  public hour!: string;
  public price!: bigint;
  public discount!: string;
  public sale!: number;
  public saleCount!: bigint;
  public isActive!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Orders.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    productID: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    productName: {
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
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    sale: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    saleCount: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "Orders",
  }
);
