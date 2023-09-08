import express from "express";
import ejs from "ejs";
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/", (req, res) => {
  const data = {
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear()
  };
  res.render("index.ejs", data);
});
app.get("/contact", function(req, res){
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});