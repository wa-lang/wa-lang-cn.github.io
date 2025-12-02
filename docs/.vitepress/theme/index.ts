import { h } from 'vue'
import { useRoute } from 'vitepress'
import Theme from 'vitepress/theme'
import { watch, nextTick } from 'vue'
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
  enhanceApp({ app, router }) {
    app.component('SvgImage', SvgImage)
  },
  setup() {
    const route = useRoute()
    watch(
      () => route.path,
      () => nextTick(() => {
        if (typeof window !== 'undefined' && (window as any).MathJax) {
          (window as any).MathJax.typesetPromise()
        }
      }),
      { immediate: true }
    )
  }
}
