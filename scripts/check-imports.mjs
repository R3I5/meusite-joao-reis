import fs from 'fs/promises';
import path from 'path';

const ROOT = path.resolve('./src');
const exts = ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'];

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(res);
    else if (/\.(js|jsx|ts|tsx|mjs|cjs)$/.test(entry.name)) yield res;
  }
}

const importRegex = /(?:import\s+[\s\S]*?from\s*|require\()\s*['"]([^'"]+)['"]/g;

function fileExistsSync(p) {
  try {
    return fs.stat(p).then(() => true).catch(() => false);
  } catch (e) {
    return Promise.resolve(false);
  }
}

async function resolveImport(fromFile, spec) {
  if (!spec.startsWith('.')) return true; // not a relative import
  const base = path.resolve(path.dirname(fromFile), spec);

  // try file with extensions
  for (const ext of exts) {
    if (await fileExistsSync(base + ext)) return true;
  }

  // try exact
  if (await fileExistsSync(base)) return true;

  // try index files in directory
  for (const ext of exts) {
    if (await fileExistsSync(path.join(base, 'index' + ext))) return true;
  }

  return false;
}

async function main() {
  const problems = [];
  for await (const file of walk(ROOT)) {
    const content = await fs.readFile(file, 'utf8');
    let m;
    while ((m = importRegex.exec(content))) {
      const spec = m[1];
      if (spec.startsWith('.')) {
        const ok = await resolveImport(file, spec);
        if (!ok) problems.push({ file, spec });
      }
    }
  }

  if (problems.length === 0) {
    console.log('All relative imports resolved.');
    process.exit(0);
  }

  console.log('Missing relative imports:');
  for (const p of problems) {
    console.log(`${path.relative(process.cwd(), p.file)} -> ${p.spec}`);
  }
  process.exit(2);
}

main().catch((e) => { console.error(e); process.exit(3); });
