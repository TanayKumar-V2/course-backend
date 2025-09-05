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

router.post("/upload-courses", protect, async (req, res) => {
  try {
    const { name, price, description, courseId, imageUrl, topics, offeredBy } =
      req.body;
    if (!name || !price || !description || !courseId || !topics || !offeredBy) {
      res.status(401).send("Please provide all credentials");
    }
    const course = await Course.findOne({ courseId });
    if (course) {
      res.status(400).send("Course already exists");
    }
    const newCourse = new Course({
      name,
      price,
      description,
      courseId,
      imageUrl,
      topics,
      offeredBy,
    });
    await newCourse.save();
    res.status(201).send("Course created successfully");
  } catch (error) {
    console.error(err);
    res.status(500).send("Server error occured");
  }
});

router.put("/update-courses/:id", protect, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, courseId, imageUrl, topics, offeredBy } =
      req.body;
    const updatedFields = {
      name,
      price,
      description,
      courseId,
      imageUrl,
      topics,
      offeredBy,
    };
    const updatedCourse = await Course.findByIdAndUpdate(id, updatedFields, {
      new: true,
      runValidators: true,
    });
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res
      .status(200)
      .json({ message: "Course updated successfully", course: updatedCourse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
