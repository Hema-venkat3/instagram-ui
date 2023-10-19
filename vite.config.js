import { defineConfig } from "vite"
import { resolve } from 'path'
export default defineConfig({
    base: "/instagram-ui/",
    build: {
        rollupOptions: {
            input: {
                white: resolve(__dirname, 'white.html')
            }
        }
    }
})