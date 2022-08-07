import db from "../models/index.js"

const homeController = {
   getHomePage: async (req, res) => {
      try {
         let userData = await db.users.findAll();
         return res.render("home.ejs", { userData: JSON.stringify(userData) });
      } catch (e) {
         console.error(e)
      }

   }
}

export default homeController 