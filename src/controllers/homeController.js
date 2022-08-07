const homeController = {
   getHomePage: (req, res) => {
      return res.render("home.ejs");
   }
}

export default homeController