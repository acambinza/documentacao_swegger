import {Request, Response} from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';

export class CreateCategoryController {
    async handle(req: Request, res: Response) {
        const {name, description} = req.body;

        const service = new CreateCategoryService();

        const rs = await service.execute({name, description});

        if(rs instanceof Error)
            return res.status(400).json(rs.message);

        return res.status(200).json(rs);
    }
}