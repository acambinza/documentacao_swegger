import { Request, Response } from 'express';
import { CreateVideoService } from '../services/CreateVideoService';


export class CreateVideoController {
    async handle(req: Request, res: Response) {
        const {name, description, category_id, duration } = req.body;

        const service = new CreateVideoService();
        const rs = await service.execute({
            name,
            description,
            category_id,
            duration
        });

        if(rs instanceof Error)
            return res.status(400).json(rs.message)

        return res.json(rs);
    }
}