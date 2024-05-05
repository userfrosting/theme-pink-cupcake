import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
// https://stackoverflow.com/a/74397545/445757
export default defineConfig({
    plugins: [vue(), dts()],
    server: {
        fs: {
            // Allow serving files from one level up to the project root.
            // Required for local testing, not required in normal project.
            allow: ['..']
        }
    },
    build: {
        outDir: './dist',
        lib: {
            entry: {
                plugins: 'src/plugins.ts',
                types: 'src/types.ts',
                components: 'src/components.ts'
            }
        },
        rollupOptions: {
            external: ['vue', 'vue-router'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    'vue-router': 'vueRouter'
                }
            }
        }
    },
    // Add UIKit alias : https://stackoverflow.com/a/75264118/445757
    resolve: {
        alias: {
            '../../images/backgrounds': 'uikit/src/images/backgrounds',
            '../../images/components': 'uikit/src/images/components',
            '../../images/icons': 'uikit/src/images/icons'
        }
    }
})
