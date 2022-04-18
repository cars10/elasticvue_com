<template>
  <section :class="featureClasses">
    <div class="container">
      <div :class="columnsClasses">
        <div class="column">
          <h2 class="mt-2 mb-2">{{ title }}</h2>
          <slot></slot>
        </div>
        <div class="column">
          <div class="gallery__thumb">
            <a :aria-label="imageAlt" :data-caption="imageAlt" :href="imageUrl">
              <img :alt="imageAlt" :src="imageUrl">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'feature',
    props: {
      white: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      imageUrl: {
        type: String,
        default: ''
      },
      imageAlt: {
        type: String,
        default: ''
      }
    },
    setup (props) {
      const featureClasses = computed(() => {
        return {
          'content': true,
          'content--white': props.white
        }
      })

      const columnsClasses = computed(() => {
        return {
          'columns': true,
          'is-flex-direction-row-reverse': !props.white
        }
      })

      return {
        featureClasses,
        columnsClasses
      }
    }
  }
</script>
