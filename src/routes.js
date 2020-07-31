import { Router } from 'express';
import NoteController from './app/controllers/NoteController';

const routes = Router();

routes.get('/', (req, res) => res.json({ result: 'TEST-API' }));

routes.post('/notes', NoteController.store);

routes.get('/notes', NoteController.index);

routes.get('/notes/:uid', NoteController.show);

routes.put('/notes/:uid', NoteController.update);

routes.delete('/notes/:uid', NoteController.delete);

export default routes;
