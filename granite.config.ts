import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'votewang',
  brand: {
    displayName: '투표왕',
    primaryColor: '#8E44AD',
    icon: 'public/icon.png',
  },
  web: {
    host: 'localhost',
    port: 5182,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  permissions: [],
});
