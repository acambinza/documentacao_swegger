import { Request, Response } from 'express';
import { UpdateVideoService } from '../services/UpdateVideoService';

export class UpdateVideoController {
    async handle(req: Request, res: Response) {
        const {id} = req.params;
        const {name, description, duration, category_id} = req.body;

        const service = new UpdateVideoService();

        const rs = await service.execute({id, name, description, duration, category_id});

        if(rs instanceof Error)
            return res.status(400).json(rs.message)

        return res.json(rs);
    }
}