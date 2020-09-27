<template>
  <div class="skeleton" :style="styles"></div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Skeleton',
  props: {
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: 10 },
    margin: { type: [String, Number], default: 5 },
    corner: { type: [String, Number], default: 1 },
    theme: { type: String, default: 'light' }
  },
  setup(props) {
    const _margin = computed(() =>
      isNumeric(props.margin) ? props.margin + 'px' : props.margin
    )
    const _width = computed(() =>
      isNumeric(props.width) ? props.width + 'px' : props.width
    )
    const _height = computed(() =>
      isNumeric(props.height) ? props.height + 'px' : props.height
    )
    const _corner = computed(() =>
      isNumeric(props.corner) ? props.corner + 'px' : props.corner
    )
    const _background = computed(() =>
      props.theme === 'dark' ? 'rgba(255,255,255, 0.2)' : '#dddbdd'
    )
    const styles = computed(() => ({
      width: _width.value,
      height: _height.value,
      margin: _margin.value,
      borderRadius: _corner.value,
      background: _background.value
    }))

    function isNumeric(value) {
      return /^\d+$/.test(value)
    }

    return {
      styles
    }
  }
})
</script>

<style>
.skeleton {
  position: relative;
  overflow: hidden;
}
.skeleton::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: wave 1.3s linear 0.5s infinite;
}
@keyframes wave {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  65% {
    opacity: 1;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(100%);
  }
}
</style>
