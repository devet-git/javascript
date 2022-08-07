import express from "express";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import dotenv from "dotenv";
import connecDB from "./config/connectDB.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app)

connecDB();

app.listen(port, () => console.log(`Server is starting: http://localhost:${port}`))
