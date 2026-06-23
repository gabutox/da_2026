import { getDependency } from "../dependency.js";
import checkRoleMiddleware from "../middlewares/check_role_middleware.js";

export function configureProductRouter(router){
    const productService = getDependency("productService");

    console.log("Configurando rutas de productos...");


    // GET /products
    router.get("/products", checkRoleMiddleware(["admin","user"]), async (req, res) => {
        const products = await productService.getList();
        res.json(products);
    });

    // GET /products/category/category
    router.get("/products/category/:category", checkRoleMiddleware(["admin","user"]), async (req, res) => {
        const products = await productService.getByCategory(req.params.category);
        res.json(products);
    });

    //GET /products/id
    router.get("/products/:id", checkRoleMiddleware(["admin","user"]), async (req, res) => {
        const product = await productService.getById(req.params.id);
        if (!product)
            return res.status(404).json({ error: "Producto no encontrado" });
        res.json(product);
    });

    // POST /products
    router.post("/products", checkRoleMiddleware(["admin"]), async (req, res) => {
        const product = await productService.add(req.body);
        res.status(201).json(product);
    });

    // DELETE /products/:id
    router.delete("/products/:id", checkRoleMiddleware(["admin"]), async (req, res) => {
        const deleted = await productService.deleteById(req.params.id);
        if (!deleted)
            return res.status(404).json({ error: "Producto no encontrado" });
        res.json(deleted);
    });

    // PATCH /products/:id
    router.patch("/products/:id", checkRoleMiddleware(["admin"]), async (req, res) => {
        const updated = await productService.updateById(req.params.id, req.body);
        if (!updated)
            return res.status(404).json({ error: "Producto no encontrado" });
        res.json(updated);
    });
}