import { Router } from "express";
import checkPalindrome from "../controllers/checkPalindrome.controller.js";

const router = Router()

router.route("/checkPalindrome").post(checkPalindrome)

export default router