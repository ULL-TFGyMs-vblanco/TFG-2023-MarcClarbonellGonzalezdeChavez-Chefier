import axios from 'axios';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { Context, Next, Request, Response } from 'koa';
import utils from '../utils/APIUtils';

export const verifyToken = async (
  { response, request }: Context,
  next: Next
) => {
  if (
    request.body.provider !== 'credentials' &&
    request.body.provider !== 'google' &&
    request.body.provider !== 'github'
  ) {
    utils.setResponse(response, 401, {
      error: 'Invalid provider',
      request: request.body,
    });
  } else {
    const bearerHeader = request.headers.authorization;
    if (bearerHeader) {
      const token = bearerHeader.split(' ')[1];
      if (request.body.provider === 'credentials') {
        if (verifyCredentials(token, request, response)) return next();
      } else if (request.body.provider === 'google') {
        try {
          await verifyGoogle(token, request, response);
          return next();
        } catch (error: any) {
          return;
        }
      } else {
        try {
          await verifyGithub(token, request, response);
          return next();
        } catch (error: any) {
          return;
        }
      }
    } else {
      utils.setResponse(response, 401, {
        error: 'An access token must be provided',
        request: request.body,
      });
    }
  }
};

function verifyCredentials(
  token: string,
  request: Request,
  response: Response
) {
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return true;
  } catch (error: any) {
    utils.setResponse(response, 401, {
      error: { message: 'Invalid credentials token', error },
      request: request.body,
    });
    return false;
  }
}

async function verifyGoogle(
  token: string,
  request: Request,
  response: Response
) {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
  return await client
    .verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then(() => {
      return;
    })
    .catch((error) => {
      utils.setResponse(response, 401, {
        error: { message: 'Invalid google token', error },
        request: request.body,
      });
      throw new Error();
    });
}

async function verifyGithub(
  token: string,
  request: Request,
  response: Response
) {
  return await axios({
    method: 'post',
    url: `https://api.github.com/applications/${process.env.GITHUB_CLIENT_ID}/token`,
    data: {
      access_token: token,
    },
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
    auth: {
      username: process.env.GITHUB_CLIENT_ID as string,
      password: process.env.GITHUB_CLIENT_SECRET as string,
    },
  })
    // .post(
    //   `https://api.github.com/applications/${process.env.GITHUB_CLIENT_ID}/token`,
    //   {
    //     access_token: token,
    //   },
    //   {
    //     headers: {
    //       Accept: 'application/vnd.github+json',
    //       Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    //       'X-GitHub-Api-Version': '2022-11-28',
    //     },
    //     auth: {
    //       username: process.env.GITHUB_CLIENT_ID as string,
    //       password: process.env.GITHUB_CLIENT_SECRET as string,
    //     },
    //   }
    // )
    .then(() => {
      return;
    })
    .catch((error) => {
      utils.setResponse(response, 401, {
        error: { message: 'Invalid GitHub token', error: error.response.data },
        request: request.body,
      });
      throw new Error();
    });
}
