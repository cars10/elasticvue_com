<template>
  <div @click="handleClick" title="double-click to select" ref="content">
    <slot></slot>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'selectable',
    setup () {
      const content = ref(null)
      const clicked = ref(false)

      const handleClick = () => {
        if (clicked.value) {
          try {
            selectText()
          } catch (e) {
          }
        } else {
          clicked.value = true
          setTimeout(() => (clicked.value = false), 400)
        }
      }

      const selectText = () => {
        const selection = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(content.value)
        selection.removeAllRanges()
        selection.addRange(range)
      }

      return {
        content,
        handleClick
      }
    }
  }
</script>
