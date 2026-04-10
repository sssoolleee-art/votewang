import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'ddaycounter',
  brand: {
    displayName: 'D-day 카운터',
    primaryColor: '#3498DB',
    icon: 'public/icon.png',
  },
  web: {
    host: 'localhost',
    port: 5180,
    commands: {
      dev: 'vite',
      build: 'vite build',
    },
  },
  permissions: [],
});
