const users = require("../routes/userRoute");
const musics = require("../routes/musicRoute");
const plans = require("../routes/planRoutes");
const payment = require("../routes/paymentRoute");

module.exports = [users, musics, plans, payment];
