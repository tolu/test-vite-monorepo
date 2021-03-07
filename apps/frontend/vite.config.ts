import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { name, version } from './package.json';

// @ts-ignore
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      'SASS_VARIABLES': resolve(__dirname, 'src/styles/common-variables.scss'),
      // fix old dep loading
      'socket.io-client': 'socket.io-client/lib/index.js'
    }
  },
  define: {
    pkgJson: { name, version }
  }
})
