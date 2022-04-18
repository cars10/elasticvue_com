<template>
  <div class="back_to_top" ref="container" :style="styles" @click="scrollToTop">Back to top</div>
</template>

<script>
  import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

  export default {
    name: 'back-to-top',
    setup () {
      const container = ref(null)
      const containerVisible = ref(false)

      const styles = computed(() => {
        if (containerVisible.value) {
          return {
            visibility: 'visible',
            opacity: '1'
          }
        } else {
          return {
            visibility: 'hidden',
            opacity: '0'
          }
        }
      })

      const toggleButton = () => (containerVisible.value = window.scrollY > 150)
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

      onMounted(() => window.addEventListener('scroll', toggleButton))
      onBeforeUnmount(() => window.removeEventListener('scroll', toggleButton))

      return {
        container,
        styles,
        scrollToTop
      }
    }
  }
</script>
