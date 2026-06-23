import { addDependency } from "./dependency.js";
import { UserService } from "./services/user_service.js";
import { LoginService } from "./services/login_service.js";
import { SessionService } from "./services/session_service.js";
import { UserMongoRepo } from "./MongoDB/user_mongo_repo.js";
import { SessionMongoRepo } from "./MongoDB/session_mongo_repo.js";
import { ProductService } from "./services/product_service.js";
import { ProductsMongoRepo} from "./MongoDB/products_mongo_repo.js";

addDependency("userRepo", new UserMongoRepo());
addDependency("sessionRepo", new SessionMongoRepo());

addDependency("userService", new UserService());
addDependency("loginService", new LoginService());
addDependency("sessionService", new SessionService());
addDependency("productRepo", new ProductsMongoRepo());
addDependency("productService", new ProductService());