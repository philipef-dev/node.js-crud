import { Video } from "src/entities/Videos";
import { getRepository } from "typeorm";

export class DeleteVideoService {
  async execute(id: string) {
    const repo = getRepository(Video);
    if (!(await repo.findOne(id))) {
      return new Error("Video does not exists");
    }

    await repo.delete(id);
  }
}
