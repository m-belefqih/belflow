import type { PublicUser } from '@belflow/shared';

declare global {
  namespace Express {
    interface Request {
      /** Set by the session middleware when the request carries a valid session cookie. */
      user?: PublicUser;
      sessionToken?: string;
    }
  }
}

export {};
