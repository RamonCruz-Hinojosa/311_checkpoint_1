const express = require("express");
const router = express.Router();
const controller = require("../controllers/users.js");

router.get("/", controller.list);

router.get("/:id", controller.get);

router.post("/", controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.deleteUser);

module.exports = router;
