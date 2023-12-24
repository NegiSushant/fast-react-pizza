import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  //changes below
  base: "/fast-react-pizza/",
  //changes above
  plugins: [react(), eslint()],
});
