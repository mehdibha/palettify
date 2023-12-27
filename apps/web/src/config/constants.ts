export const APP_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:3000`
    : `https://app.palettify.co`;
