"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
var app = (0, express_1.default)();
dotenv_1.default.config();
// app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
var PORT = process.env.PORT || 8080;
//routes:
app.listen(PORT, function () {
    console.log("listening on " + PORT);
});
