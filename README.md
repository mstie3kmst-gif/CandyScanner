# 🎃 Candy Safety Scanner 3000

A just-for-fun Halloween "candy scanner." Point your phone camera at candy (or just tap the button), watch a dramatic fake scan, and it always declares the candy SAFE.

## Run locally
```
npm install
npm start
```
Open http://localhost:3000

## Deploy to Railway
1. Push this folder to a GitHub repo.
2. In Railway: New Project → Deploy from GitHub repo.
3. Railway detects Node and runs `npm start` automatically.
4. Settings → Networking → Generate Domain.

The camera needs HTTPS, which Railway's domain gives you. (On localhost it works too.)

*For entertainment only — it doesn't actually inspect anything.*
