import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

routes.get('/notes', (req, res) =>
  res.json({
    notes: [
      {
        title: 'notes',
        content: 'teste',
      },
      {
        title: 'notes',
        content: 'teste',
      },
    ],
  })
);

export default routes;
