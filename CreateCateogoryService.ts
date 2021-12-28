import { getRepository } from "typeorm";
import { Category } from "./src/entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async excute({ name, description }: CategoryRequest): Promise<Category> {
    const repo = getRepository(Category);

    if (await repo.findOne({ name })) {
      return new Error("Category already exists");
    }
    
    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
