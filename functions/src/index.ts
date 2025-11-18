import * as path from "path";
import { onRequest } from "firebase-functions/v2/https";

// Učitaj Next.js SSR server
const server = require(path.resolve(__dirname, "../next/server/app.js"));

export const nextjs = onRequest(
  {
    region: "europe-west1",
    timeoutSeconds: 60,
    memory: "512MiB",
  },
  (req, res) => {
    server.handler(req, res);
  }
);