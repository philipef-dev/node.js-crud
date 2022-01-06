import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { DeleteVideoController } from "./controllers/DeleteVideoController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";
import { UpdateCategotyController } from "./controllers/UpdateCategoryController";
import { UpdateVideoController } from "./controllers/UpdateVideoController";

const router = Router();

router.post("/categories", new CreateCategoryController().handle);
router.get("/categories", new GetAllCategoriesController().handle);
router.delete("/categories/:id", new DeleteCategoryController().handle);
router.put("/categories/:id", new UpdateCategotyController().handle);

router.post("/videos", new CreateVideoController().handle);
router.get("/videos", new GetAllVideosController().handle);
router.delete("/videos/:id", new DeleteVideoController().handle);
router.put("/videos/:id", new UpdateVideoController().handle);

export { router };
