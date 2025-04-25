import express from "express";
import  sendApplication from "../controllers/sendApplication.js"
import getApplications from "../controllers/getApplications.js"
import deleteApplication from "../controllers/deleteApplication.js"
import updateApplication from "../controllers/updateApplication.js"

const router = express.Router();

router.get("/get", getApplications); 
router.post("/post", sendApplication); 
router.delete("/delete/:_id", deleteApplication);
router.put("/update/:_id", updateApplication)

console.log('Routes in sendRouter: /send/get, /send/post, /send/delete, /send/update');

export default router;
