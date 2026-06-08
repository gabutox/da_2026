import { configureLoginRouter } from "./login_router.js";
import { configureUserRouter} from './user_router.js';

export function createRouter(router) {
    console.log("Creando rutas principales...");
    configureLoginRouter(router);
    configureUserRouter(router);
}