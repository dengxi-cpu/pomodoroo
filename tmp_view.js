const fs = require('fs');
const text = fs.readFileSync('frontend/js/main.js', 'utf8');
const segmentStart = text.indexOf('const taskStats = {}');
console.log(text.slice(segmentStart, segmentStart + 200));
