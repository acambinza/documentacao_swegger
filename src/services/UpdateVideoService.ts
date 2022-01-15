import { getRepository, ViewEntity } from "typeorm";
import { Category } from "../entities/Category";

import { Videos } from "../entities/Videos";

type VideoUpdateequest = {
    id: string;
    name: string;
    description: string;
    duration: number;
    category_id: string;
}


export class UpdateVideoService {
    async execute({id, name, description, duration, category_id}: VideoUpdateequest) {
        const repo = getRepository(Videos);

        const repoCategory = getRepository(Category);
        const video = await repo.findOne(id);

        if(!await repoCategory.findOne(category_id))
            return new Error("Category does not exists!");

        if(!video)
            return new Error("This Video does not exists");
        
        video.name = name ? name : video.name;
        video.description = description ? description :video.description;
        video.duration = duration ? duration : video.duration;
        video.category_id = category_id ? category_id : video.category_id;

        await repo.save(video);

        return video;
    }
}