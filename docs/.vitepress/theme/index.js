import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import './custom.css'
import '@documate/vue/dist/style.css'

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () =>
      h(Documate, {
        endpoint: 'https://5129r9av6i.us.aircode.run/ask',
        predefinedQuestions: ['What is PERSCOM?', 'How do I sign up?', 'What are the benefits of PERSCOM?']
      })
  })
}
