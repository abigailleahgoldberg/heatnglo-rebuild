import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';

const paths = ['.vercel/output/static', 'dist/client', 'dist'];
const target = paths.find((p) => existsSync(p));
if (!target) {
  console.log('pagefind: no build output dir found, skipping index');
  process.exit(0);
}
console.log(`pagefind: indexing ${target}`);
execSync(`npx pagefind --site ${target}`, { stdio: 'inherit' });
