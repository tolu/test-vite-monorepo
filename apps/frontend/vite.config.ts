import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { name, version } from './package.json';
import importSvgAsComponent from 'vite-plugin-svgr';

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), importSvgAsComponent()],
  resolve: {
    alias: {
      'SASS_VARIABLES': resolve(__dirname, 'src/styles/common-variables.scss'),
    }
  },
  define: {
    pkgJson: { name, version }
  }
})
