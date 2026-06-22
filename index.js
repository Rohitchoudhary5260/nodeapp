const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
const port = process.env.PORT || 4000;

const connectDB = require("./coon/mongo");
connectDB();

const product = require("./router/productrouter");
const users = require("./router/useradd");
const order = require("./router/orderroute");
const admin = require("./router/adminrouter");
const home = require("./router/homeproduct");
const time = require("./router/checkrouter");
const tmdb = require("./router/tmdbrouter");

server.use(cors({ origin: "*" }));
server.use(express.json());

server.use("/api", product);
server.use("/users", users);
server.use("/order", order);
server.use("/admin", admin);
server.use("/data", home);
server.use("/shiv", time);
server.use("/tmdb", tmdb);

server.get("/", (req, res) => {
    res.send("Server is running");
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});