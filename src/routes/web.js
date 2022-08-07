import { Router } from "express";
import homeController from "../controllers/homeController.js";

let router = Router();
let initWebRoutes = (app) => {

   router.get('/', homeController.getHomePage)
   return app.use("/", router)
}

export default initWebRoutes