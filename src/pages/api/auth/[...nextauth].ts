import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import AuthService from '@/services/AuthService';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
          const res = await axios.post('/api/auth/login', {
            email,
            password,
          });
          return res.data.user;
        } catch (err) {
          throw new Error('Invalid email or password');
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== 'credentials') {
        await AuthService.register('/api/auth/register', {
          arg: {
            email: user.email!,
            username: user.name!,
            avatar: user.image!,
          },
        });
        return true;
      } else {
        return true;
      }
    },
  },
};

export default NextAuth(authOptions);
