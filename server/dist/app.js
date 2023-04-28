"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
require("./db/mongoose");
const default_routes_1 = require("./routers/default.routes");
const user_routes_1 = require("./routers/user.routes");
const recipe_routes_1 = require("./routers/recipe.routes");
const imagekit_routes_1 = require("./routers/imagekit.routes");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('@koa/cors');
exports.app = new koa_1.default();
exports.app
    .use((0, koa_bodyparser_1.default)())
    .use(cors())
    .use(user_routes_1.userRouter.routes())
    .use(user_routes_1.userRouter.allowedMethods())
    .use(recipe_routes_1.recipeRouter.routes())
    .use(recipe_routes_1.recipeRouter.allowedMethods())
    .use(imagekit_routes_1.imagekitRouter.routes())
    .use(imagekit_routes_1.imagekitRouter.allowedMethods())
    .use(default_routes_1.defaultRouter.routes());
