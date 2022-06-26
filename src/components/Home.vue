<template>
  <section class="content content--lead" id="main_content">
    <div class="container">
      <div class="mb-6">
        <div class="columns">
          <div class="column">
            <h1 class="quote mb-4 mt-2 mt-0--mobile">
              <strong>Elasticvue</strong> is a free and open-source elasticsearch gui for the browser.
            </h1>

            <h2 class="mb-1">Features</h2>
            <ul class="ul--default">
              <li>Cluster overview</li>
              <li>Index management</li>
              <li>Search interface</li>
              <li>REST Query interface</li>
              <li>Snapshot management</li>
              <li>
                ...
                <router-link to="/features" class="link--white link--decorated"> and more</router-link>
              </li>
            </ul>
          </div>

          <div class="column">
            <a :href="mainImageUrl" target="_blank">
              <img alt="Screenshot" class="img-responsive" :src="mainImageUrl">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-html="edgeBottomLeft"></div>
  </section>

  <section class="content content--white">
    <div class="container">
      <h2 class="has-text-centered mb-4">Get elasticvue</h2>

      <div class="columns mb-4">
        <div class="column is-offset-one-quarter is-half-desktop feature-wrapper">
          <div class="feature">
            <div class="feature__badge feature__badge--warning">beta</div>
            <h3 class="feature__title">
              Desktop app
            </h3>
            <div class="feature__body">
              <p class="mb-1">Elasticvue desktop (based on <a href="https://tauri.studio" target="_blank">tauri</a>) is
                currently in beta. Try it here:</p>
              <a class="button button--primary mb-1"
                 href="https://github.com/cars10/elasticvue/releases"
                 rel="noopener" target="_blank"><span v-html="externalIcon"></span> Elasticvue desktop</a>
            </div>
          </div>
        </div>
      </div>

      <div class="has-text-centered subheading mb-4">
        <p>
          The browser extensions are the easiest way to run elasticvue.<br>
          This way you can use elasticvue immediately without having to do any cluster configuration.
        </p>
      </div>

      <div class="columns is-multiline mb-4">
        <div class="column is-one-third-desktop feature-wrapper">
          <div class="feature">
            <div class="feature__badge">zero config</div>
            <h3 class="feature__title">
              <span v-html="chromeIcon"></span>
              Chrome extension
            </h3>
            <div class="feature__body">
              <p class="mb-1">Elasticvue is available in the chrome web store:</p>
              <a class="button button--primary mb-1"
                 href="https://chrome.google.com/webstore/detail/elasticvue/hkedbapjpblbodpgbajblpnlpenaebaa"
                 rel="noopener" target="_blank"><span v-html="externalIcon"></span> Chrome webstore</a>
            </div>
          </div>
        </div>

        <div class="column is-one-third-desktop feature-wrapper">
          <div class="feature">
            <div class="feature__badge">zero config</div>
            <h3 class="feature__title">
              <span v-html="edgeIcon"></span>
              Edge extension
            </h3>
            <div class="feature__body">
              <p class="mb-1">Elasticvue is available in the microsoft store:</p>
              <a class="button button--primary mb-1"
                 href="https://microsoftedge.microsoft.com/addons/detail/geifniocjfnfilcbeloeidajlfmhdlgo"
                 rel="noopener" target="_blank"><span v-html="externalIcon"></span> Microsoft webstore</a>
            </div>
          </div>
        </div>

        <div class="column is-one-third-desktop feature-wrapper">
          <div class="feature">
            <div class="feature__badge">zero config</div>
            <h3 class="feature__title">
              <span v-html="firefoxIcon"></span>
              Firefox addon
            </h3>
            <div class="feature__body">
              <p class="mb-1">Elasticvue is available for firefox:</p>
              <a class="button button--primary mb-1"
                 href="https://addons.mozilla.org/en-US/firefox/addon/elasticvue/"
                 rel="noopener" target="_blank"><span v-html="externalIcon"></span> Firefox addon</a>
            </div>
          </div>
        </div>
      </div>

      <div class="has-text-centered subheading mb-4">
        <p>
          If you don't use a browser extension then you have to configure CORS to grant the browser access to your
          cluster.
          <br>Elasticvue will guide you on how to configure your cluster when you use it for the first time.
        </p>
      </div>

      <div class="columns is-multiline mb-4">
        <div class="column is-one-third-desktop feature-wrapper">
          <div class="feature">
            <h3 class="feature__title">Web app</h3>
            <div class="feature__body">
              <p class="mb-1">You can use the hosted version of elasticvue to avoid installing anything.</p>
              <a class="button button--primary mb-1" href="https://app.elasticvue.com" rel="noopener"
                 target="_blank"><span v-html="externalIcon"></span> app.elasticvue.com</a>
            </div>
          </div>
        </div>

        <div class="column is-one-third-desktop feature-wrapper">
          <div class="feature feature--docker">
            <h3 class="feature__title">
              <span v-html="dockerIcon"></span>
              Docker image
            </h3>
            <div class="feature__body">
              <p class="mb-1">
                Download and run
                <a href="https://hub.docker.com/r/cars10/elasticvue" rel="noopener" target="_blank">
                  the image</a>, then open
                <a href="http://localhost:8080" rel="noopener" target="_blank">http://localhost:8080</a>:
              </p>
              <div class="overflow-x-scroll inline-block">
                <selectable>
                            <pre class="inline-block code-block"><code>docker run -p 8080:8080 \
           -d cars10/elasticvue</code></pre>
                </selectable>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-one-third-desktop feature-wrapper">
          <div class="feature">
            <h3 class="feature__title">
              <span v-html="githubIcon"></span>
              Building manually
            </h3>
            <div class="feature__body">
              <p class="mb-1">
                Check the <a href="https://github.com/cars10/elasticvue" rel="noopener" target="_blank">readme</a>
                for instructions on how to manually build elasticvue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="has-text-centered">
        Checkout
        <router-link to="/usage">usage</router-link>
        for details on how to configure your cluster to use elasticvue.
      </p>
    </div>
  </section>
</template>

<script>
  import mainImageUrl from '/assets/images/main.webp'
  import edgeBottomLeft from '/assets/edges/bottom_left.svg?raw'
  import externalIcon from '/assets/icons/external.svg?raw'
  import chromeIcon from '/assets/icons/chrome.svg?raw'
  import edgeIcon from '/assets/icons/edge.svg?raw'
  import firefoxIcon from '/assets/icons/firefox.svg?raw'
  import dockerIcon from '/assets/icons/docker.svg?raw'
  import githubIcon from '/assets/icons/github.svg?raw'
  import Selectable from './shared/Selectable.vue'

  export default {
    name: 'home',
    components: {
      Selectable
    },
    setup () {
      return {
        mainImageUrl,
        edgeBottomLeft,
        externalIcon,
        chromeIcon,
        edgeIcon,
        firefoxIcon,
        dockerIcon,
        githubIcon,
      }
    }
  }
</script>
