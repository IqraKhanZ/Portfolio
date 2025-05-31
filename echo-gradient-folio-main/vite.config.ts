import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [react()],
  base: '/Portfolio/', // 🔁 Change this if your repo has a different name
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
