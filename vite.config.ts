import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 4200,
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
  },
  preview: {
    port: 4200,
    host: true,
    strictPort: true,
  },
});
