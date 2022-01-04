import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategotyController } from "./controllers/UpdateCategoryController";

const router = Router();

router.post("/categories", new CreateCategoryController().handle);
router.get("/categories", new GetAllCategoriesController().handle);
router.delete("/categories/:id", new DeleteCategoryController().handle);
router.put("/categories/:id", new UpdateCategotyController().handle);

export { router };
