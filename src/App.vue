<template>
  <div>
    <header class="header" id="header">
      <div class="container">
        <router-link to="/" class="brand">
          <img alt="Elasticvue logo" class="brand-logo" src="../assets/logo/white_104.webp">
          <span class="brand-title link--white link--hover">Elasticvue</span>
        </router-link>

        <nav class="pull-right">
          <ul :class="menuClasses">
            <li>
              <router-link to="/" class="navigation__link link--white link--hover" active-class="active">
                home
              </router-link>
            </li>
            <li>
              <router-link to="/usage" class="navigation__link link--white link--hover" active-class="active">
                usage
              </router-link>
            </li>
            <li>
              <router-link to="/features" class="navigation__link link--white link--hover" active-class="active">
                features
              </router-link>
            </li>
            <li>
              <a class="navigation__link link--white link--hover" href="https://github.com/cars10/elasticvue"
                 rel="noopener" target="_blank"><span v-html="externalIcon"></span> code</a>
            </li>
          </ul>

          <a aria-label="Menu" class="hamburger" href="javascript:void(0)" role="button" @click="toggleMenu"
             @blur="menuOpen = false">
            <span class="is-sr-only">Menu</span>
            <div class="hamburger--bar"></div>
            <div class="hamburger--bar"></div>
            <div class="hamburger--bar"></div>
          </a>
        </nav>
      </div>

      <a aria-label="Elasticvue on GitHub" class="github-corner" href="https://github.com/cars10/elasticvue"
         rel="noopener"
         target="_blank" title="Elasticvue on GitHub" tabindex="-1">
        <svg aria-hidden="true" height="78"
             style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; right: 0;"
             viewBox="0 0 250 250" width="78">
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path class="octo-arm"
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor" style="transform-origin: 130px 106px;"></path>
          <path class="octo-body"
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="#25315a"></path>
        </svg>
      </a>
    </header>

    <main class="main">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column py-0">
            <p class="mb-1">
              <router-link to="imprint" rel="nofollow">Imprint</router-link>
            </p>
            <p>
              <router-link to="privacy" rel="nofollow">Privacy policy</router-link>
            </p>
          </div>
          <div class="column py-0">
            <div class="has-text-centered">
              <p class="">&copy; {{ currentYear }}</p>
              <p>Carsten K&ouml;nig</p>
            </div>
          </div>
          <div class="column py-0">
            <div class="pull-right mt-05">
              <a href="https://github.com/cars10/elasticvue" rel="noopener" target="_blank">
                <img alt="Github" :src="githubLogoUrl" width="100">
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <back-to-top/>
  </div>
</template>

<script>
  import externalIcon from '/assets/icons/external.svg?raw'
  import githubLogoUrl from '/assets/github/github_logo.webp'
  import BackToTop from './components/shared/BackToTop.vue'
  import { computed, ref } from 'vue'

  export default {
    name: 'app',
    components: {
      BackToTop
    },
    setup () {
      const currentYear = new Date().getFullYear().toString()

      const menuOpen = ref(false)
      const toggleMenu = () => (menuOpen.value = !menuOpen.value)
      const menuClasses = computed(() => {
        return {
          'navigation': true,
          'navigation--open': menuOpen.value
        }
      })

      return {
        externalIcon,
        githubLogoUrl,
        currentYear,
        toggleMenu,
        menuOpen,
        menuClasses
      }
    }
  }
</script>
