import express from "express";
import sendRouter from "./routes/jobRoutes.js";
import mongoose from "mongoose";
import { DB_HOST } from "../config.js";
const app = express();
mongoose.connect(DB_HOST).then(() => {
    console.log("Database connect success");
}).catch((error) => {
    console.log(error.message, "error");
    process.exit(1);
});
app.use(express.json());
app.use("/send", sendRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
export default app;
//# sourceMappingURL=server.js.map