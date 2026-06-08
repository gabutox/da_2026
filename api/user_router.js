import { getDependency } from "../dependency.js";
import checkRoleMiddleware from "../middlewares/check_role_middleware.js";

export function configureUserRouter(router) {
    const userService = getDependency("userService");

    console.log("Configurando rutas de usuarios...");

    // GET /users — lista todos los usuarios
    router.get("/users", checkRoleMiddleware(["admin"]), async (req, res) => {
        const users = await userService.getList();
        res.json(users);
    });

    // GET /users/:username — obtiene un usuario por nombre
    router.get("/users/:username", checkRoleMiddleware(["admin"]), async (req, res) => {
        const user = await userService.getByUsername(req.params.username);
        if (!user)
            return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(user);
    });

    // POST /users — crea un nuevo usuario
    router.post("/users", checkRoleMiddleware(["admin"]), async (req, res) => {
        const user = await userService.add(req.body);
        res.status(201).json({ id: user._id, username: user.user_name, role: user.role });
    });

    // DELETE /users/:username — elimina un usuario por nombre
    router.delete("/users/:username", checkRoleMiddleware(["admin"]), async (req, res) => {
        const deleted = await userService.deleteByUsername(req.params.username);
        if (!deleted)
            return res.status(404).json({ error: "Usuario no encontrado" });
        res.json({ message: "Usuario eliminado", username: deleted.user_name });
    });

    // PATCH /users/:username — modifica un usuario por nombre
    router.patch("/users/:username", checkRoleMiddleware(["admin"]), async (req, res) => {
        const updated = await userService.updateByUsername(req.params.username, req.body);
        if (!updated)
            return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(updated);
    });
}