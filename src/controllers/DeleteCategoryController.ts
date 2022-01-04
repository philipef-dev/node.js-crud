import { Request, Response } from "express";
import { DeleteCategoryService } from "src/services/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteCategoryService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    response.status(204).json(result);
  }
}
