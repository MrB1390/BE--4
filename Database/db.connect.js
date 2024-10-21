

import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = process.env.POSTGRESQL_CONNECTION_STRING;

const sequelize = new Sequelize(dbConnect, {
    dialect: 'postgres',
  });
  
  const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('PostgreSQL connected successfully.');
    } catch (error) {
      console.error('Unable to connect to PostgreSQL:', error);
    }
  };
  
  export default sequelize;
  export { connectDB }