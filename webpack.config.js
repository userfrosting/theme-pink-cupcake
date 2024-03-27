import Encore from '@symfony/webpack-encore'
import webpack from 'webpack'

import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

// Register dependent Sprinkles entries
let entries = {
    main: './tests/src/main.js'
}

Encore.configureRuntimeEnvironment('dev')
Encore.setOutputPath('dist-webpack/assets')
    .setPublicPath('/assets/')
    .addEntries(entries)
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableVueLoader(() => {}, {
        runtimeCompilerBuild: false
    })
    .configureDevServerOptions((options) => {
        options = {
            ...options,
            // liveReload and static are used to reload the whole page
            // when anything in templates changes
            liveReload: true,
            static: {
                directory: path.resolve(__dirname, 'dist-webpack'),
                publicPath: '/',
                serveIndex: true,
                watch: true
            }
        }
    })
    .enableLessLoader()
    .addPlugin(
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
        })
    )
var config = Encore.getWebpackConfig()

// Fix for extensionless imports
// @see https://webpack.js.org/configuration/module/#resolvefullyspecified
config.module.rules.push({
    test: /\.m?js/,
    resolve: {
        fullySpecified: false
    }
})

export default config
