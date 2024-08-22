/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
// import '@/styles/settings.scss'

// Composables
// import { createVuetify } from 'vuetify'

// import { zhHant } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
// export default createVuetify({
//   theme: {
//     defaultTheme: 'light',
//   },
//   locale: {
//     locale: 'zhHant',
//     messages: { zhHant }
//   }
// })

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/settings.scss'

// Composables
import { createVuetify } from 'vuetify'
import { zhHant } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight: {
        dark: false,
        colors: {
          background: '#ebe8e1',
          surface: '#ebe8e1',
          primary: '#ebe8e1',
          text: '#212879',
           // 如果需要設置更多顏色，可以在這裡添加
        },
      },
    },
  },
  locale: {
    locale: 'zhHant',
    messages: { zhHant }
  }
})

