import * as jwt from 'jsonwebtoken';
import { Context } from 'koa';
import { User } from '../models/user';
import ctx from '../utils/CtxUtils';
import bcrypt from 'bcrypt';

// Register a user
export const register = async ({ response, request }: Context) => {
  if (!request.body.username || !request.body.email) {
    ctx.setResponse(response, 400, {
      error: 'Email and username are required',
      request: request.body,
    });
    return;
  }
  const email = request.body.email;
  const username = request.body.username.toLowerCase().replace(/ /g, '_');
  let user = new User({ username, email });
  if (request.body.image) {
    const image = request.body.image;
    user = new User({ username, email, image });
  } else if (request.body.password) {
    const password = await bcrypt.hash(request.body.password, 10);
    user = new User({ username, email, password });
  }
  await User.create(user)
    .then((user) => {
      ctx.setResponse(response, 200, { user });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const errors = Object.keys(err.errors).map((key) => {
          return { message: err.errors[key].message, field: key };
        });
        ctx.setResponse(response, 400, {
          error: { message: err._message, errors: errors },
          request: request.body,
        });
      } else if (err.code && err.code === 11000) {
        ctx.setResponse(response, 400, {
          error: {
            message: 'Duplicated credential.',
            errors: [
              {
                message: `An account with that ${Object.keys(
                  err.keyValue
                )} already exists.`,
                field: Object.keys(err.keyValue)[0],
              },
            ],
          },
          request: request.body,
        });
      } else {
        ctx.setResponse(response, 500, {
          error: { message: err },
          request: request.body,
        });
      }
    });
};

// Log in a user
export const login = async ({ response, request }: Context) => {
  if (!request.body.email || !request.body.password) {
    ctx.setResponse(response, 400, {
      error: 'Email and password are required',
      request: request.body,
    });
    return;
  }
  await User.findOne({
    email: request.body.email,
  })
    .then(async (user) => {
      if (
        user &&
        (await bcrypt.compare(request.body.password, user.password))
      ) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
          expiresIn: '86400s',
        });
        ctx.setResponse(response, 200, {
          name: user.username,
          email: user.email,
          image: user.image,
          accessToken: token,
        });
      } else {
        ctx.setResponse(response, 404, {
          error: 'Incorrect email or password',
          request: request.body,
        });
      }
    })
    .catch((err) => {
      ctx.setResponse(response, 500, {
        error: err,
        request: request.body,
      });
    });
};

// Get a user's data by username
export const getUser = async ({ response, request, params }: Context) => {
  await User.findOne({ username: params.username }, [
    '-password',
    '-saved',
    '-email',
    '-__v',
  ])
    .then((user) => {
      if (user) {
        ctx.setResponse(response, 200, user);
      } else {
        ctx.setResponse(response, 404, {
          error: 'User not found',
          request: request.body,
        });
      }
    })
    .catch((err) => {
      ctx.setResponse(response, 500, {
        error: err,
        requerequest: request.body,
      });
    });
};

module.exports = {
  register,
  login,
  getUser,
};
