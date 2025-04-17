export const BACKEND_URL =
  process.env.BACKEND_URL || "https://developers-hub-ism2.onrender.com";
export const BACK_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const secretKey = process.env.SESSION_SECRET_KEY;
export const EncodedKey = new TextEncoder().encode(secretKey);
