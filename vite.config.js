import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sea-ice-particle-demo/',
  server: {
    proxy: {
      '/titiler': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/titiler/, '')
      }
    }
  }
});
