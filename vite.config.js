import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    open: true,
  },

  build: {
    minify: "esbuild",
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
