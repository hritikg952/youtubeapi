import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDB();

// const app = express();
// const PORT = process.env.PORT;

// (async () => {
//   try {
//     // Connect to DB
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     //Application error handling
//     app.on("error", (error) => {
//       console.log("Application not able to connect to DB: ", error);
//       throw error;
//     });

//     //listening to port
//     app.listen(PORT, () => {
//       console.log("Application is listening on: ", PORT);
//     });
//   } catch (error) {
//     console.log("ERROR WHILE CONNECTING TO DB: ", error);
//     throw error;
//   }
// })();
