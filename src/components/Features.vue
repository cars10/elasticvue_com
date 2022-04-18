<template>
  <section class="content">
    <div class="container">
      <div class="has-text-centered">
        <h1 class="title mb-2">Elasticvue features</h1>
        <p>See elasticvue in action.</p>
      </div>
    </div>

    <div v-html="edgeBottomLeft"></div>
  </section>

  <div class="gallery-wrapper">
    <feature white title="Cluster overview" :image-url="Screenshot0" image-alt="Homepage">
      <p class="mb-1">
        Elasticvue displays the response of both endpoints for node information and the
        whole cluster health.
      </p>
    </feature>

    <feature title="Node overview" :image-url="Screenshot1" image-alt="Cluster nodes">
      <p class="mb-1">You can view every node in your cluster in a table or grid view.</p>
      <p>You can chose between table and grid views to display names, roles, utilization and more.</p>
    </feature>

    <feature white title="Shard overview" :image-url="Screenshot2" image-alt="Shards">
      <p class="mb-1">
        You can view your current shard allocations and also relocate shards to different nodes.
      </p>
    </feature>

    <feature title="Index management" :image-url="Screenshot3" image-alt="Indices">
      <p class="mb-1">
        You can manually create and manage your indices. This includes viewing index settings and stats
        or opening and closing the index.
      </p>
    </feature>

    <feature white title="Index alias management" :image-url="Screenshot4" image-alt="Index alias management">
      <p class="mb-1">
        Elasticvue provides a frontend for you to quickly add & remove aliases for you indices.
      </p>
    </feature>

    <feature title="Document search" :image-url="Screenshot5" image-alt="Document search">
      <p class="mb-1">
        You can search documents and view the results in a fully featured table, including sorting,
        filtering and pagination.
      </p>
      <p>
        You can also adjust the generated query when you need additional control.
      </p>
    </feature>

    <feature white title="REST gui" :image-url="Screenshot6" image-alt="REST">
      <p class="mb-1">
        Elasticvue has a gui to query your cluster via direct HTTP requests. You can also view and re-use your query
        history.
      </p>
    </feature>

    <feature title="Snapshot & repositories" :image-url="Screenshot7" image-alt="Snapshot management">
      <p class="mb-1">
        Manage repositories and snapshots right in your browser.
        <br>
        You can create, delete and restore snapshots based on index patterns.
      </p>
    </feature>

    <feature white title="Utilities" :image-url="Screenshot8" image-alt="Utilities">
      <p class="mb-1">
        The provided utilities help you to quickly clean your clusters data during development. You can
        also add some test data.
      </p>
    </feature>

    <feature title="Settings" :image-url="Screenshot9" image-alt="Settings">
      <p class="mb-1">
        You can configure a custom regex to hide indices that you don' usually need.
      </p>
      <p>
        You can also import & export your elasticvue data if you frequently switch devices or browsers.
      </p>
    </feature>
  </div>
</template>

<script>
  import edgeBottomLeft from '/assets/edges/bottom_left.svg?raw'
  import Screenshot0 from '/assets/images/screenshots/screenshot_0_home_white.webp'
  import Screenshot1 from '/assets/images/screenshots/screenshot_1_nodes.webp'
  import Screenshot2 from '/assets/images/screenshots/screenshot_2_shards.webp'
  import Screenshot3 from '/assets/images/screenshots/screenshot_3_indices.webp'
  import Screenshot4 from '/assets/images/screenshots/screenshot_4_indices.webp'
  import Screenshot5 from '/assets/images/screenshots/screenshot_5_search_dark.webp'
  import Screenshot6 from '/assets/images/screenshots/screenshot_6_query_dark.webp'
  import Screenshot7 from '/assets/images/screenshots/screenshot_7_snapshots_dark.webp'
  import Screenshot8 from '/assets/images/screenshots/screenshot_8_utilities_dark.webp'
  import Screenshot9 from '/assets/images/screenshots/screenshot_9_settings.webp'
  import Feature from './Features/Feature.vue'
  import { onMounted } from 'vue'
  import baguetteBox from 'baguettebox.js'

  export default {
    name: 'features',
    components: {
      Feature
    },
    setup () {
      onMounted(() => {
        baguetteBox.run('.gallery-wrapper', {
          noScrollbars: true,
          titleTag: true,
          async: true
        })
      })

      return {
        edgeBottomLeft,
        Screenshot0,
        Screenshot1,
        Screenshot2,
        Screenshot3,
        Screenshot4,
        Screenshot5,
        Screenshot6,
        Screenshot7,
        Screenshot8,
        Screenshot9,
      }
    }
  }
</script>
