import { Context } from 'koa';
import { Recipe } from '../models/recipe';
import utils from '../utils/APIUtils';

// Get recipes list
export const getRecipes = async (
  { response, request }: Context,
  filter: any
) => {
  await Recipe.find(filter)
    .then((recipes) => {
      utils.setResponse(response, 200, recipes);
    })
    .catch((err) => {
      utils.setResponse(response, 500, {
        error: err,
        requerequest: request.body,
      });
    });
};

// Post a recipe
export const postRecipe = async ({ response, request }: Context) => {
  const recipe = new Recipe(request.body);
  await Recipe.create(recipe)
    .then((recipe) => {
      utils.setResponse(response, 200, { recipe });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const errors = Object.keys(err.errors).map((key) => {
          return { message: err.errors[key].message, field: key };
        });
        utils.setResponse(response, 400, {
          error: { message: err._message, errors: errors },
          request: request.body,
        });
      } else {
        utils.setResponse(response, 500, {
          error: { message: err },
          request: request.body,
        });
      }
    });
};

module.exports = {
  getRecipes,
  postRecipe,
};