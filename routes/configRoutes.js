const express = require("express");
const authEnController = require("../controllers/authEnController");
const router = express.Router();
router.get("/", authEnController.protect, (req, res) => {
	res.json({
		STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
	});
});
module.exports = router;
