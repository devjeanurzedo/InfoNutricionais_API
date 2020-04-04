import { Router } from 'express';
import Categorias from './src/controller/foods';

const routes = new Router();

routes.get('/categ', Categorias.getCategorias);
routes.get('/categ/:categ/foods', Categorias.getFoodByCateg);

export default routes;
