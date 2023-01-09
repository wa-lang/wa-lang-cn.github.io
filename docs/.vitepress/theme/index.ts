import { h } from 'vue'
import Theme from 'vitepress/theme'
import '../styles/vars.css'
import HomePage from '../components/HomePage.vue'
import SvgImage from '../components/SvgImage.vue'
import Comments from '../components/Comments.vue'
import Banner from '../components/Banner.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-top': () => h(Banner),
      'home-features-after': () => h(HomePage),
      'doc-after': () => h(Comments),
    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  },
}
