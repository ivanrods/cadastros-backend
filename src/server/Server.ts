import express, { Request, Response } from 'express';

const sever = express();


sever.get('/', (req: Request, res: Response) => {
  res.send('Olá, DEV!');
});

export {sever}
