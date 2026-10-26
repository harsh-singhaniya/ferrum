import type { AuthPayload } from "@/modules/auth/types.ts";

declare global {
  namespace Express {
    interface Request {
      user: AuthPayload;
    }
  }
}

export {};
