import { resolve } from 'path'
import { addPluginTemplate, defineNuxtModule } from '@nuxt/kit'

interface IModuleOptions {
  
}

export default defineNuxtModule<IModuleOptions>({
  meta: {
    name: 'module-1',
    version: '0.0.1',
    configKey: 'mod',
  },
  setup (nuxt) {
    console.log('The module gets loaded....')
    addPluginTemplate({
      src: resolve(__dirname, './plugin.ts'),
      write: true,
      options: {
        
      },
    })
  },
})
