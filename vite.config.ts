import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Components',
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'html'],
    },
    environment: 'jsdom',
    // setupFiles: ['./src/tests/setup.ts'],
    globals: true,
  },
});
