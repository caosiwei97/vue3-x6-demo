import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtendPlugin from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Pages from 'vite-plugin-pages'
import path from 'path'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    vueJsx(),
    
    vue({
      reactivityTransform: true,
    }),

    Pages({
      dirs: 'src/views',
      exclude: ['**/components/**', '**/!(index).vue'],
    }),

    vueSetupExtendPlugin(),

    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
      imports: ['vue', 'vue-router', 'vue/macros'],
      dts: './types/auto-imports.d.ts',
      vueTemplate: true,
    }),

    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dirs: ['src/**'],
      deep: true,
      dts: './types/components.d.ts',
      version: 3,
    }),

    Icons({
      autoInstall: true,
    }),
  ],
})
