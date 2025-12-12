import { Sequelize } from "sequelize";
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from "../config/config";

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: false,
});

import "../models/Product";
import "../models/Category";
import "../models/User";
import "../models/Comment";
import "../models/Order";
import "../models/Discount";

export async function connectToDatabase() {
  try {    
    await sequelize.authenticate();
    console.log("MySQL connected successfully!");

    await sequelize.sync({ alter: true });

    console.log("Database models synced (auto-migrated)");

  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
}
