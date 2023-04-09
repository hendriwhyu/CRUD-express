import Express from "express";
import { 
    deleteUser,
    getUser,
    getUserById,
    saveUser,
    updateUser
} from "../controller/UserController.js";
const router = Express.Router();

router.get('/users', getUser);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;