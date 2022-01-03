import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";

const router = Router();

router.post("/categories", new CreateCategoryController().handle);
router.get("/categories", new GetAllCategoriesController().handle);

export { router };
