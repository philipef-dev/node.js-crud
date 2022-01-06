import { Video } from "src/entities/Videos";
import { getRepository } from "typeorm";

type VideoRequest = {
  id: string;
  name: string;
  description: string;
  duration: number;
};

export class UpdateVideoService {
  async execute({ id, name, description, duration }: VideoRequest) {
    const repo = getRepository(Video);

    const video = await repo.findOne(id);

    if (!video) {
      return new Error("Video does not existis");
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.duration = duration ? duration : video.duration;

    await repo.save(video);

    return video;
  }
}
