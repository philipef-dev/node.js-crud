import { Category } from "src/entities/Category";
import { getRepository } from "typeorm";

export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category);

    const categories = await repo.find();

    return categories;
  }
}
