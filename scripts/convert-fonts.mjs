import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import wawoff2 from 'wawoff2';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fontsDir = path.join(__dirname, '..', 'public', 'fonts');

const files = [
  'LilitaOne-Regular.ttf',
  'Nunito-Variable.ttf',
  'Nunito-Italic-Variable.ttf'
];

console.log('🔄 Starting WebAssembly WOFF2 font compression...');

for (const file of files) {
  const inputPath = path.join(fontsDir, file);
  const outputPath = path.join(fontsDir, file.replace('.ttf', '.woff2'));

  if (!fs.existsSync(inputPath)) {
    console.warn(`⚠️ Font not found: ${inputPath}`);
    continue;
  }

  const inputBuffer = fs.readFileSync(inputPath);
  console.log(`⏳ Compressing ${file} (${(inputBuffer.length / 1024).toFixed(1)} KB)...`);

  try {
    const outputBuffer = await wawoff2.compress(inputBuffer);
    fs.writeFileSync(outputPath, outputBuffer);
    console.log(`✅ Compressed ${file.replace('.ttf', '.woff2')} (${(outputBuffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`❌ Failed to compress ${file}:`, err);
  }
}

console.log('🎉 Font compression successfully finished!');
