import express from "express";
import  sendApplication from "../controllers/sendApplication.js"
import getApplications from "../controllers/getApplications.js"
import deleteApplication from "../controllers/deleteApplication.js"
import updateApplication from "../controllers/updateApplication.js"
const router = express.Router();

router.get("/", getApplications); 
router.post("/post", sendApplication); 
router.delete("/delete", deleteApplication);
router.put("/update", updateApplication)

export default router;
