import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path';
import { name, version } from './package.json';
import importSvgAsComponent from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), importSvgAsComponent()],
  resolve: {
    alias: {
      SASS_VARIABLES: resolve(__dirname, "src/styles/common-variables.scss"),
    },
  },
  define: {
    pkgJson: { name, version },
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
  },
  server: {
    open: "/index.html",
  },
});
