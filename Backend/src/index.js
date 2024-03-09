import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error while connecting to app: ", error);
    });

    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log("There has been some error while connecting to DB: ", err);
  });
