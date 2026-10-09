#!/usr/bin/env node
import { spawn, execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Clean up any lingering Next.js dev server processes on the port
try {
  execSync('pkill -9 -f "next dev" || true', { stdio: 'ignore' });
} catch (_) {}

// Parse arguments passed by the platform runner (e.g., --host, --port, -p, -H)
const rawArgs = process.argv.slice(2);
let port = '3000';
let host = '0.0.0.0';

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (arg === '--port' || arg === '-p') {
    if (rawArgs[i + 1] && !rawArgs[i + 1].startsWith('-')) {
      port = rawArgs[i + 1];
      i++;
    }
  } else if (arg.startsWith('--port=')) {
    port = arg.split('=')[1];
  } else if (arg === '--host' || arg === '-H' || arg === '--hostname') {
    if (rawArgs[i + 1] && !rawArgs[i + 1].startsWith('-')) {
      host = rawArgs[i + 1];
      i++;
    }
  } else if (arg.startsWith('--host=')) {
    host = arg.split('=')[1];
  } else if (arg.startsWith('--hostname=')) {
    host = arg.split('=')[1];
  }
}

const nextBin = path.join(__dirname, 'node_modules', '.bin', 'next');
const args = ['dev', '-p', port, '-H', host];

const child = spawn(nextBin, args, {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});

child.on('error', (err) => {
  console.error('Failed to start Next.js dev server:', err);
  process.exit(1);
});

const cleanup = () => {
  try {
    child.kill('SIGTERM');
  } catch (_) {}
  try {
    child.kill('SIGKILL');
  } catch (_) {}
  process.exit(0);
};

process.on('SIGTERM', cleanup);
process.on('SIGINT', cleanup);
