<template>
  <div class="flex tweet-skeleton" :class="theme" v-for="n in count" :key="n">
    <Skeleton height="60" width="60" :theme="theme" corner="50%" />
    <div class="flex flex-col">
      <Skeleton height="20" :theme="theme" />
      <Skeleton :theme="theme" />
      <Skeleton :theme="theme" />
      <div class="flex space-between ac" style="margin-top: 20px">
        <Skeleton height="20" width="25" :theme="theme" corner="5" />
        <Skeleton height="20" width="25" :theme="theme" corner="5" />
        <Skeleton height="20" width="25" :theme="theme" corner="5" />
      </div>
    </div>
  </div>
</template>

<script>
import Skeleton from "../Skeleton";
export default {
  components: { Skeleton },
  props: {
    count: { type: Number, default: 1 },
    theme: { type: String, default: "light" },
  },
};
</script>

<style scoped>
.tweet-skeleton {
  padding: 10px;
  background: #fff;
}
.tweet-skeleton.dark {
  background: rgba(0, 0, 0, 0.2);
}
.ac > div {
  flex: 1;
}
</style>
