import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/shelter/",
  server: {
    host: true,
    port: 3000,
    open: true,
  },

  build: {
    minify: "esbuild",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pets: resolve(__dirname, "pets.html"),
      },
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
