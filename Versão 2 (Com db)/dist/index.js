"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const status_route_1 = __importDefault(require("./routes/status.route"));
const error_handler_middlwere_1 = __importDefault(require("./middlewares/error-handler.middlwere"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(error_handler_middlwere_1.default);
app.use(users_route_1.default);
app.use(status_route_1.default);
app.listen(3000, () => {
    console.log("Rodando! Porta 3000");
});
