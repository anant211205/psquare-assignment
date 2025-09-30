import { Router } from "express";
import { addNewInventory } from "../controllers/inventory.controller.js";
import { upload } from "../utils/multer.js";

const inventoryRouter = Router() ;

inventoryRouter.route("/add-inventory").post(upload.single('image'), addNewInventory) ;

export {inventoryRouter} ;