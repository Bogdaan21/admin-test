import {onRequest} from "firebase-functions/v2/https";

export const hello = onRequest((req, res) => {
  res.send("Hello from Firebase!");
});