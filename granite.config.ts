import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'votewang',
  brand: {
    displayName: '투표왕',
    primaryColor: '#8E44AD',
    icon: 'https://static.toss.im/appsintoss/27863/cea5e6d4-5344-4a45-9531-48151f4ae05a.png',
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
