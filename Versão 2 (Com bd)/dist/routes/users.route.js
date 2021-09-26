"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const usersRoute = (0, express_1.Router)();
const OK = http_status_codes_1.StatusCodes.OK;
const CREATED = http_status_codes_1.StatusCodes.CREATED;
usersRoute.get("/users", (req, res, next) => {
    const users = [{ userName: "Pedro" }];
    res.status(OK).json({ users: users });
});
usersRoute.get("/users/:uuid", (req, res, next) => {
    const uuid = req.params.uuid;
    const users = [{ uuid }];
    res.status(OK).json({ users: users });
});
usersRoute.post("/users", (req, res, next) => {
    const body = req.body;
    console.log(body);
    res.status(CREATED).json({ body });
});
usersRoute.put("/users/:uuid", (req, res, next) => {
    const body = req.body;
    const uuid = req.params.uuid;
    console.log(body);
    res.status(OK).json({ uuid, body });
});
usersRoute.delete("/users/:uuid", (req, res, next) => {
    const uuid = req.params.uuid;
    res.status(OK).json({ uuid, info: "Apagado" });
});
exports.default = usersRoute;
