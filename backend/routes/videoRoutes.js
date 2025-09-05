import express from "express";
import { getTrendingVideos, searchVideos } from "../controllers/videoController.js";

const router = express.Router();

router.get("/trending", getTrendingVideos);
router.get("/search", searchVideos);

export default router;