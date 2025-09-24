import { Router } from "express";
import Course from "../models/course.model.js";
import protect from "../middleware/authMiddleware.js";

const router = Router();

router.get("/my-courses", protect, async (req, res) => {
  try {
    const course = await Course.find();
    if (!course) {
      res.status(400).send("No courses found");
    }
    res.status(201).json({ course });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

export default router;