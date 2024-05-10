const express = require("express");
const { musicList, generateMusic } = require("../controllers/musicController");
const router = express.Router();

router.post("/get_music", musicList);
router.post("/generate_music", generateMusic);
module.exports = router;
