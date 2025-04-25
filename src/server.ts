import express, { Application } from "express";
import jobRouter from "./routes/jobRoutes.js"; 
import mongoose from "mongoose";
import { DB_HOST }  from "./config.js"
import cors from "cors";

const app: Application = express();

mongoose.connect(DB_HOST)
  .then(() => {
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message, "error");
    process.exit(1);
  });


app.use(cors());
app.use(express.json());
app.use("/", jobRouter);

const PORT = 5000;  //process.env.PORT || 

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // консолька для тех, кто забыл маршруты
  console.log('Registered routes:');
  jobRouter.stack.forEach((middleware: any) => {
    if (middleware.route) {
      console.log(middleware.route.path);
    }
  });
});

export default app;
