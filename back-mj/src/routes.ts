import { Router } from "express";
import { userRoutes } from "./modules/user/http/user.routes";

export const routes = Router()
    .use('users', userRoutes) 