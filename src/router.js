import Home from './components/Home.vue'
import Features from './components/Features.vue'
import Usage from './components/Usage.vue'
import Imprint from './components/Imprint.vue'
import Privacy from './components/Privacy.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/features', name: 'Features', component: Features },
  { path: '/usage', name: 'Usage', component: Usage },
  { path: '/imprint', name: 'Imprint', component: Imprint },
  { path: '/privacy', name: 'Privacy', component: Privacy }
]

const titles = {
  'Home': 'Elasticvue - Elasticsearch gui for the browser',
  'Features': 'Elasticvue - Elasticsearch gui features',
  'Usage': 'Elasticvue - Elasticsearch gui usage',
  'Imprint': 'Elasticvue - Imprint',
  'Privacy': 'Elasticvue - Privacy Policy'
}

const metaDescriptions = {
  'Home': 'Elasticvue is a free and open-source elasticsearch gui for the browser',
  'Features': 'Elasticvue features cluster management, document searching, a rest query interface and more.',
  'Usage': 'Use elasticvue as web app, browser extension, docker container or self hosted.'
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from) => {
  document.title = titles[to.name]
  document.querySelector('meta[property="og:title"]').setAttribute('content', metaDescriptions[to.name])
  document.querySelector('meta[property="og:description"]').setAttribute('content', metaDescriptions[to.name])
})

export default router
