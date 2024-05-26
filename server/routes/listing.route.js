import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  searchListings
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();

router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/search",searchListings)  //search

export default router;
