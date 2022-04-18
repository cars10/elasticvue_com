<template>
  <section class="content">
    <div class="container">
      <div class="has-text-centered">
        <h1 class="title mb-2">Elasticvue usage</h1>
        <p>Before using elasticvue you might have to enable CORS in your elasticsearch cluster.</p>
      </div>
    </div>

    <div v-html="edgeBottomLeft"></div>
  </section>

  <section class="content content--white">
    <div class="container">
      <div class="mb-6">
        <h2 class="mb-2" id="configuration">Cluster configuration</h2>

        <p class="mb-2">
          You have to enable CORS if you do <strong>not</strong> use the browser extension,
          otherwise the browser will reject all requests. <br>
          Edit your config file (usually
          <selectable class="inline-block">
            <span class="code-inline">/etc/elasticsearch/elasticsearch.yml</span>)
          </selectable>
          and enable CORS based on how you run elasticvue:
        </p>

        <collapse name="web_app2" title="Web app">
          <p class="mb-1">
            You have to enable CORS if you use elasticvue via
            <a href="https://app.elasticvue.com" rel="noopener" target="_blank">
              app.elasticvue.com</a>.
          </p>
          <p class="mb-1">Add the following to your elasticsearch configuration:</p>
          <selectable><pre class="overflow-x-scroll code-block mb-1"><code>http.cors.enabled: true
http.cors.allow-origin: /https:\/\/app.elasticvue.com/

<span class="comment"># and if your cluster is password protected you also have to add:</span>
http.cors.allow-headers: X-Requested-With,Content-Type,Content-Length,Authorization</code></pre>
          </selectable>
        </collapse>

        <collapse name="docker" title="Docker">
          <p class="mb-1">
            You have to enable CORS if you use elasticvue via
            <a href="https://hub.docker.com/r/cars10/elasticvue" rel="noopener" target="_blank">
              Docker</a>.
          </p>
          <p class="mb-1">Add the following to your elasticsearch configuration:</p>
          <selectable><pre class="overflow-x-scroll code-block mb-1"><code>http.cors.enabled: true
http.cors.allow-origin: "http://localhost:8080"

<span class="comment"># and if your cluster is password protected you also have to add:</span>
http.cors.allow-headers: X-Requested-With,Content-Type,Content-Length,Authorization</code></pre>
          </selectable>
        </collapse>

        <collapse name="manually" title="Building manually">
          <p class="mb-1">
            You have to enable CORS if you manually built elasticvue. In this case you probably know
            what to
            do, simply add the origin of the host where elasticvue is running to your elasticsearch
            config.
          </p>
          <p class="mb-1">
            For example if it is running on
            <span class="code-inline selectable">http://localhost:8080</span>:
          </p>
          <selectable><pre class="overflow-x-scroll code-block mb-1"><code>http.cors.enabled: true
http.cors.allow-origin: "http://localhost:8080"

<span class="comment"># and if your cluster is password protected you also have to add:</span>
http.cors.allow-headers: X-Requested-With,Content-Type,Content-Length,Authorization</code></pre>
          </selectable>
        </collapse>

        <p>Restart your cluster when you are done and you should be able to connect.</p>
      </div>

      <div class="mb-6">
        <h2 class="mb-1">Running elasticsearch in docker</h2>

        <p>
          If your elasticsearch cluster is running inside docker then you probably do not use the
          <span class="code-inline">elasticsearch.yml</span> config file.
        </p>

        <p class="mb-1">
          In this case you can configure your cluster by passing the settings via environment variables, for
          example:
        </p>

        <selectable><pre class="overflow-x-scroll code-block"><code>docker run -e "http.cors.enabled=true" \
           -e "http.cors.allow-origin=http://localhost:8080" \
           -e "discovery.type=single-node" \
           -p 9200:9200 \
           -p 9300:9300 \
           docker.elastic.co/elasticsearch/elasticsearch:7.8.0</code></pre>
        </selectable>
      </div>

      <div>
        <h2 class="mb-1">Need help?</h2>

        <p>
          Please
          <a href="https://github.com/cars10/elasticvue/issues/new/choose" target="_blank" rel="noopener">
            open an issue
          </a> on github if you need help connecting to your cluster.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import edgeBottomLeft from '/assets/edges/bottom_left.svg?raw'
  import Selectable from './shared/Selectable.vue'
  import Collapse from './Usage/Collapse.vue'

  export default {
    name: 'usage',
    components: {
      Collapse,
      Selectable
    },
    setup () {
      return {
        edgeBottomLeft
      }
    }
  }
</script>
