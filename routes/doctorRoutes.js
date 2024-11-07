const express = require("express");
const doctorController = require("../controllers/doctorController");
const auth = require("../middleware/auth");

const doctorRouter = express.Router();

doctorRouter.get("/getallhelpers", doctorController.getalldoctors);

doctorRouter.get("/getnothelpers", auth, doctorController.getnotdoctors);

doctorRouter.post("/applyforhelper", auth, doctorController.applyfordoctor);

doctorRouter.put("/deletedoctor", auth, doctorController.deletedoctor);

doctorRouter.put("/accepthelper", auth, doctorController.acceptdoctor);

doctorRouter.put("/rejecthelper", auth, doctorController.rejectdoctor);

module.exports = doctorRouter;
