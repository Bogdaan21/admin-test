This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


1.⁠ ⁠skripta build za kopiranje .next (iz root-a) -> fucntions  

  "build": "next build && cp -r .next functions/.next",

  2. package.jos (sa verzijama koje sigurno rade)

{
  "name": "moja-aplikacija",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": "20"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build && cp -r .next functions/.next",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "firebase": "12.6.0",
    "next": "16.0.3",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.1.17",
    "@types/node": "20.12.12",
    "@types/react": "19.0.2",
    "@types/react-dom": "19.0.2",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "9.12.0",
    "eslint-config-next": "16.0.3",
    "tailwindcss": "4.1.17",
    "typescript": "5.6.2"
  }
}



  3. index.js iz fucntion (on je klasicni, uzima .next koji je u 1. kopiran i NE MOZE VAN FOLDERA DA GA OCITAVA I OBAVEZNO DA BUDE NASLOVEN OVAKO .next)

const functions = require("firebase-functions");
const next = require("next");

const app = next({
  dev: false,
conf: { distDir: ".next" }
});

const handle = app.getRequestHandler();

exports.nextjs = functions.https.onRequest(async (req, res) => {
  await app.prepare();
  return handle(req, res);
});


   4. ovo je package.json iz funcitons 


{
  "name": "functions",
  "version": "1.0.0",
  "private": true,
  "engines": {
    "node": "20"
  },
  "main": "index.js",
  "scripts": {
    "deploy": "firebase deploy --only functions",
    "serve": "firebase emulators:start --only functions"
  },
  "dependencies": {
    "firebase-admin": "12.6.0",
    "firebase-functions": "6.0.1",
    "next": "16.0.3"
  }
}


5.⁠ ⁠ovo je komanda za reset nextAPP, OVO OBAVEZNO KORISTITI DA SE PONISTI ZAGLAVLJENI DEPLOY, OVO JE JAKO BITNO

firebase functions:delete nextjs --region=us-central1






firebase functions:delete nextjs --region=us-central1
rm -rf node_modules package-lock.json .next
rm -rf functions/node_modules functions/package-lock.json functions/.next