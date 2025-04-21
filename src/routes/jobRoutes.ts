import express from "express";
import  sendApplication from "../controllers/sendApplication"
import getApplications from "../controllers/getApplications"
import deleteApplication from "../controllers/deleteApplication"
import updateApplication from "../controllers/updateApplication"
const router = express.Router();

router.get("/", getApplications); 
router.post("/post", sendApplication); 
router.delete("/delete", deleteApplication);
router.put("/update", updateApplication)

export default router;
