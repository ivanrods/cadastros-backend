import { Router } from 'express';

import { CidadesController } from './../controllers';

import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor funcionando!');
});

const router = Router();


router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);



export { router };