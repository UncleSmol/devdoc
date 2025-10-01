import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "4mflrs-5173.csb.app",
      "localhost",
      "127.0.0.1",
      "https://csb.app",
    ],
  },
});
