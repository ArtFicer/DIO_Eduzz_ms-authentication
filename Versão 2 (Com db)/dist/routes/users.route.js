"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const user_repository_1 = __importDefault(require("../repositories/user.repository"));
const usersRoute = (0, express_1.Router)();
const OK = http_status_codes_1.StatusCodes.OK;
const CREATED = http_status_codes_1.StatusCodes.CREATED;
usersRoute.get("/users", async (req, res, next) => {
    const users = await user_repository_1.default.findAllUsers();
    res.status(OK).json({ users: users });
});
usersRoute.get("/users/:uuid", async (req, res, next) => {
    try {
        const uuid = req.params.uuid;
        const user = await user_repository_1.default.findById(uuid);
        res.status(OK).json({ user });
    }
    catch (error) {
        next(error);
    }
});
usersRoute.post("/users", async (req, res, next) => {
    const newUser = req.body;
    const uuid = await user_repository_1.default.create(newUser);
    res.status(CREATED).json(uuid);
});
usersRoute.put("/users/:uuid", async (req, res, next) => {
    const { uuid } = req.params;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    await user_repository_1.default.update(modifiedUser);
    res.sendStatus(http_status_codes_1.StatusCodes.OK);
});
usersRoute.delete("/users/:uuid", async (req, res, next) => {
    const { uuid } = req.params;
    await user_repository_1.default.remove(uuid);
    res.sendStatus(http_status_codes_1.StatusCodes.OK);
});
exports.default = usersRoute;
