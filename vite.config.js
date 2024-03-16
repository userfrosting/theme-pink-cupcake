import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts()],
    resolve: {
        alias: {
            '@userfrosting/theme-pinkcupcake': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'ThemePinkcupcake',
            fileName: 'theme-pinkcupcake'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
