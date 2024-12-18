import {Router} from "express";

import StudenControllers from "../Controllers/StudentControllers";

const router= Router()

router.get("/all",StudenControllers.handleGetAllUsers)

router.get("/:id",StudenControllers.handleGetUserById)

router.put("/:id",StudenControllers.handleUpdateUser)


router.post("/add",StudenControllers.handleCreateUser)
        
       
router.delete("/:id",StudenControllers.handleDeleteById)

export default router