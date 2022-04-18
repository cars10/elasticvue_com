<template>
  <div class="collapse mb-2">
    <input :id="name" class="collapse__toggle__input" type="checkbox" :checked="checked" aria-hidden="true">
    <label :for="name" class="collapse__toggle" tabindex="0" @keydown.enter.space="toggle">{{ title }}</label>
    <div class="collapsible-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'collapse',
    props: {
      name: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    },
    setup () {
      const checked = ref(false)

      const toggle = e => {
        e.preventDefault()
        checked.value = !checked.value
      }

      return {
        checked,
        toggle
      }
    }
  }
</script>
