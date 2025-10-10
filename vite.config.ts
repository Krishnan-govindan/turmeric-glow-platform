import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT: set base to your repo name for GitHub Pages
// URL will be: https://<user>.github.io/turmeric-glow-platform/
const base = "/turmeric-glow-platform/";

export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
