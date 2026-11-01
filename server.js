const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Fake "analysis" endpoint so the scan feels like it talks to a lab
const verdicts = [
  'Certified Spook-Free',
  'Zero Ghost Contamination',
  'Witch-Approved',
  'Vampire Tested, Human Approved',
  'Cleared by the Pumpkin Council',
  'Mummy Seal of Approval'
];

app.get('/api/analyze', (req, res) => {
  const scans = Number(app.locals.scans = (app.locals.scans || 0) + 1);
  setTimeout(() => {
    res.json({
      safe: true,
      verdict: verdicts[Math.floor(Math.random() * verdicts.length)],
      sugarLevel: 70 + Math.floor(Math.random() * 30),
      spookLevel: Math.floor(Math.random() * 3),
      deliciousness: 90 + Math.floor(Math.random() * 11),
      scanId: 'CNDY-' + Date.now().toString(36).toUpperCase(),
      totalScans: scans
    });
  }, 400);
});

app.get('/health', (req, res) => res.send('ok'));

app.listen(PORT, () => console.log(`🎃 Candy scanner running on port ${PORT}`));
