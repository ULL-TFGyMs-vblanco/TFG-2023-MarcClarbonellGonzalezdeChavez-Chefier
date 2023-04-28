"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.postRecipe = exports.getRecipes = void 0;
const recipe_1 = require("../models/recipe");
const APIUtils_1 = __importDefault(require("../utils/APIUtils"));
// Get recipes list
const getRecipes = async ({ response, request }, filter) => {
    await recipe_1.Recipe.find(filter)
        .then((recipes) => {
        APIUtils_1.default.setResponse(response, 200, recipes);
    })
        .catch((err) => {
        APIUtils_1.default.setResponse(response, 500, {
            error: err,
            requerequest: request.body,
        });
    });
};
exports.getRecipes = getRecipes;
// Post a recipe
const postRecipe = async ({ response, request }) => {
    try {
        const recipeData = JSON.parse(request.body.recipe);
        const res = await APIUtils_1.default.uploadImage(request.file.buffer.toString('base64'), recipeData.name, `/images/posts/${recipeData.username}`);
        const fileId = res.fileId;
        recipeData.image = {
            url: res.url,
            fileId,
        };
        const recipe = new recipe_1.Recipe(recipeData);
        await recipe_1.Recipe.create(recipe)
            .then((recipe) => {
            APIUtils_1.default.setResponse(response, 200, { recipe });
        })
            .catch((err) => {
            if (err.name === 'ValidationError') {
                const errors = Object.keys(err.errors).map((key) => {
                    return { message: err.errors[key].message, field: key };
                });
                APIUtils_1.default.setResponse(response, 400, {
                    error: { message: err._message, errors: errors },
                    request: request.body,
                });
            }
            else {
                APIUtils_1.default.setResponse(response, 500, {
                    error: { message: err },
                    request: request.body,
                });
            }
            APIUtils_1.default.deleteImage(fileId);
        });
    }
    catch (err) {
        APIUtils_1.default.setResponse(response, 500, {
            error: { message: err },
            request: request.body,
        });
    }
};
exports.postRecipe = postRecipe;
// Delete a recipe
const deleteRecipe = async ({ response, params }) => {
    await recipe_1.Recipe.findByIdAndDelete(params.id)
        .then(async (recipe) => {
        try {
            await APIUtils_1.default.deleteImage(recipe?.image.fileId);
            APIUtils_1.default.setResponse(response, 200, { recipe });
        }
        catch (err) {
            APIUtils_1.default.setResponse(response, 500, {
                error: { message: err },
                request: params.id,
            });
        }
    })
        .catch((err) => {
        APIUtils_1.default.setResponse(response, 500, {
            error: { message: err },
            request: params.id,
        });
    });
};
exports.deleteRecipe = deleteRecipe;
module.exports = {
    getRecipes: exports.getRecipes,
    postRecipe: exports.postRecipe,
    deleteRecipe: exports.deleteRecipe,
};
