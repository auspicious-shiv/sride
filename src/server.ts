import express from "express";
import routes from "./route";
const app = express();
app.use(express.json());
app.listen(9000, () => {
    console.log(`Listening on port 9000`);
    routes(app)
  });