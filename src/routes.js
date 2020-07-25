import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

routes.get('/notes', (req, res) =>
  res.json({
    notes: [
      {
        title: 'nota 1',
        content: 'teste nota 1',
        date: '25/07/2020',
        hour: '10:00',
      },
      {
        title: 'nota 2',
        content: 'teste nota 2',
        date: '26/07/2020',
        hour: '11:00',
      },
    ],
  })
);

export default routes;
