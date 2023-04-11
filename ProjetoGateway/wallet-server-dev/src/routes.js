import { Router } from "express";
import CartsControllers from "./controllers/CartsControllers";

const routes = new Router();

// routes.get("/transactions", ...)
routes.get('/carts', CartsControllers.index);

export default routes;