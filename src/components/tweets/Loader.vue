<template>
  <div class="flex tweet-skeleton" :class="theme" v-for="n in count" :key="n">
    <div>
      <skeleton height="90" width="90" corner="90" :theme="theme" />
    </div>
    <div class="flex flex-col">
      <Skeleton height="20" :theme="theme" corner="10" />
      <Skeleton :theme="theme" corner="10" />
      <Skeleton :theme="theme" corner="10" />
      <div class="flex space-between ac" style="margin-top: 20px">
        <div>
          <Skeleton height="20" width="55" :theme="theme" corner="20" />
        </div>
        <div>
          <Skeleton height="20" width="55" :theme="theme" corner="20" />
        </div>
        <div>
          <Skeleton height="20" width="55" :theme="theme" corner="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Skeleton from '../Skeleton'
export default defineComponent({
  components: { Skeleton },
  props: {
    count: { type: Number, default: 1 },
    theme: { type: String, default: 'light' }
  }
})
</script>

<style scoped>
.tweet-skeleton {
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.tweet-skeleton:last-child {
  border-bottom-color: transparent;
}
.tweet-skeleton.dark {
  background: rgba(0, 0, 0, 0.2);
}
.ac > div {
  flex: 1;
}
</style>
