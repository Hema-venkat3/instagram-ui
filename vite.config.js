import { defineConfig } from "vite"
import { resolve } from 'path'
export default defineConfig({
    base: "/instagram-ui/",
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                white: resolve(__dirname, 'white.html')
            }
        }
    }
})