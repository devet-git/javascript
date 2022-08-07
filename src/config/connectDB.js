import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const sequelize = new Sequelize('nodejs_setup', 'root', process.env.DB_PW, {
   host: 'localhost',
   dialect: 'mysql'
});
const connectDB = async () => {
   try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');

   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }
}

export default connectDB;