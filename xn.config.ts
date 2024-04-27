import { defineConfig } from '@xn-sakina/meta'
import { resolve } from 'path'
import { GenerateSW } from 'workbox-webpack-plugin'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  // FIXME: 历史遗留，太多 alias 了
  alias: getDirAliasMap(['utils', 'data', 'assets', 'constants', 'hooks']),
  compile: 'swc',
  cssMinify: 'parcelCss',
  jsMinify: 'esbuild',
  cache: true,
  webpackChain(config) {
    if (!isProd) {
      return config
    }
    config.plugin('sw').use(GenerateSW, [
      {
        // cacheId: 'opqbot-homepage',
        clientsClaim: true,
        skipWaiting: true,
        // exclude: [/\.html/],
        exclude: [/.+?/],
        runtimeCaching: [
          // js css
          {
            urlPattern: /^https:\/\/fastly\.jsdelivr\.net(.+?)\.(js|css)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'opq:cdn',
              expiration: {
                maxEntries: 30,
              },
            },
          },
          // img
          {
            urlPattern:
              /^https:\/\/fastly\.jsdelivr\.net(.+?)\.(png|jpg|jpeg|gif|svg)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'opq:cdn-img',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 12,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // html
          {
            urlPattern: (e) => {
              if (e.url.host === 'opqbot.com') {
                return ['/'].includes(e.url.pathname)
              }
              return false
            },
            handler: 'NetworkFirst',
            options: {
              cacheName: 'opq:html',
              expiration: {
                maxEntries: 20,
              },
            },
          },
        ],
      },
    ])
    return config
  },
  // FIXME: rspack process assets very slow in dev mode
  // bundler: 'rspack',
  // rspackConfig(config) {
  //   config.cache = false;
  //   config.builtins!.progress = {}
  //   config.builtins!.devFriendlySplitChunks = true
  //   config.builtins!.minifyOptions = {
  //     passes: 0
  //   }
  //   return config
  // },
  publicPath: isProd
    ? '//fastly.jsdelivr.net/gh/opq-osc/opqbot-homepage@gh-pages/'
    : '/',
})

function getDirAliasMap(dirs: string[]) {
  const alias: Record<string, string> = {}
  dirs.forEach((dir) => {
    alias[`@${dir}`] = resolve(__dirname, `./src/${dir}`)
  })
  return alias
}
