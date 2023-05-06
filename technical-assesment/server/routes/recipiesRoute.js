const express = require("express");
const router = express.Router();
const {getrecepie, addrecepie, updaterecepie, deleterecepie, search}= require("../controller/recipiesController.js")


router.get("/getAll",getrecepie);
router.post("/add",addrecepie)
router.put("/:recepie_id",updaterecepie)
router.delete("/:recepie_id",deleterecepie)
router.get("/search/:recepie_Name",search)


module.exports = router;

