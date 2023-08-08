import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import asyncHandler from  'express-async-handler';
import { FoodModels } from "../models/food.model";
const router = Router();


router.get("/seed",asyncHandler(
  async (_req,res) => {
    const foodsCount = await FoodModels.countDocuments();
    if (foodsCount>0){
        res.send("Seed is already done!");
        return;
    }
     await FoodModels.create(sample_foods);
     res.send("Seed Is Done!");
    }
  ))


router.get("/", asyncHandler(
    async (req,res) =>{
        const foods = await FoodModels.find();
        res.send(foods);
    }
))


router.get("/search/:searchTerm",asyncHandler(
    async(req,res) =>{
    const searchRegex = new RegExp(req.params.searchTerm,'i');
    const foods = await FoodModels.find({name:{$regex:searchRegex}})
    res.send(foods);
    }
))


router.get("/tags",asyncHandler(
    async(_req,res) =>{
        const tags = await FoodModels.aggregate([
            {
               $unwind : '$tags'
            },
            {
                $group:{
                  _id: '$tags',
                  count: {$sum: 1}
                }
            },
            {
                $project:{
                   _id:0,
                   name:'$_id',
                   count:'$count'
                }
            }
        ]) .sort({count: -1});

        const all = {
            name:'All',
            count:await FoodModels.countDocuments()
        }

        tags.unshift(all);
    res.send(sample_tags);
}
))


router.get("/tag/:tagName", asyncHandler (
    async(req,res) =>{
    const foods = await FoodModels.find({tags: req.params.tagName})
    res.send(foods);
    }
))


router.get("/:foodId",asyncHandler(
    async(req,res)=>{
    const food = await FoodModels.findById(req.params.foodId);
     res.send(food);
  }
))


  export default router;