import { addDependency } from './dependency.js';
import { UserService } from './services/user_service.js';
import { UserMockup } from './mockups/user_mockup.js';

// Inyectamos las dependencias en memoria
addDependency('userService', new UserService());
addDependency('userRepo', new UserMockup());