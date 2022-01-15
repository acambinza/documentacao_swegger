import { Request, Response } from 'express';
import { DeleteCategoryService } from '../services/DeleteCategoryService';

export class DeleteCategoryController {
    async handle(req: Request, res: Response){
        const {id} = req.params

        const service = new DeleteCategoryService();
        const rs  = await service.execute(id)

        if(rs instanceof Error)
            return res.status(400).json(rs.message);
        
        return res.status(200).end();
    }
}