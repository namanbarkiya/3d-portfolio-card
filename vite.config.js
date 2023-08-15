// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                abhirajsakargaye: resolve(
                    __dirname,
                    "abhiraj-sakargaye/index.html"
                ),
                namanbarkiya: resolve(__dirname, "naman-barkiya/index.html"),
            },
        },
    },
});
