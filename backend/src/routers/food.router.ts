import { Router } from "express";
import { sample_foods, sample_tags } from "../data";

const router = Router();

// Get all foods
router.get("/", (req, res) => {
  res.send(sample_foods);
});

// Search foods
router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm.toLowerCase();
  const foods = sample_foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm)
  );
  res.send(foods);
});

// Get all tags
router.get("/tags", (req, res) => {
  res.send(sample_tags);
});

// Get foods by tag
router.get("/tag/:tagName", (req, res) => {
  const tag = req.params.tagName.toLowerCase();
  if (tag === "all") return res.send(sample_foods);

  const foods = sample_foods.filter(food =>
    food.tags.map((t: string) => t.toLowerCase()).includes(tag)
  );

  res.send(foods);
});

// Get food by ID
router.get("/:foodId", (req, res) => {
  const food = sample_foods.find(food => food.id === req.params.foodId);
  if (!food) return res.status(404).send({ message: "Food Not Found" });

  res.send(food);
});

export default router;
