const express = require("express");
const { musicList } = require("../controllers/musicController");
const router = express.Router();

router.post("/get_music", musicList);
module.exports = router;
