import { createAdmin} from "../controller/usercontroller.js";
import { createStudent } from "../controller/usercontroller.js";
import { createAlumni } from "../controller/usercontroller.js";
import {getAllUsers} from "../controller/usercontroller.js";
import { createCompany,getAllCompanies } from "../controller/companyController.js";
import { createReview,getAllReviews } from "../controller/reviewContoller.js";
import { likeReviews } from "../controller/likesController.js";
import express from "express";
import { isAdmin,isAlumni,isStudent} from "../middleware/middleware.js";

const router=express.Router();

router.post("/admin/create",createAdmin);
router.post("/student/create",createStudent);
router.post("/alumni/create",createAlumni);
router.get("/user/getusers",getAllUsers);
router.post("/company/create",isAdmin,createCompany);
router.get("/user/getcompanies",getAllCompanies);
router.post("/review/create",isAlumni,createReview);
router.get("/getallreviews",getAllReviews);
router.post("/likereviews/create",isStudent,likeReviews)

export default router;