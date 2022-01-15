import { Request, Response } from 'express';
import { UpdateCategoryService } from '../services/UpdateCategoryService';

export class UpdateCategoryController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, description } = req.body

        const service = new UpdateCategoryService();

        const rs = await service.execute({id, name, description})

        if(rs instanceof Error)
            return res.status(400).json(rs.message)
        
        return res.json(rs)
    }
}