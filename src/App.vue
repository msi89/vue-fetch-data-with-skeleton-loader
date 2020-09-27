<template>
  <div class="wrapper" :class="theme">
    <div class="container">
      <div style=" text-align:center">
        <h1>Tweets</h1>
      </div>
    </div>
    <tweet-view :theme="theme" />
  </div>
</template>

<script>
import TweetView from './views/tweets.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    TweetView
  },
  setup() {
    let theme = ref('light')

    return {
      theme
    }
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
}
.wrapper.dark {
  background-color: rgba(0, 0, 0, 0.8);
}
.container {
  width: 60%;
  margin: 60px auto;
}
.flex {
  width: 100%;
  display: flex;
}
.flex.flex-col {
  flex-direction: column;
}
.flex.items-center {
  align-items: center;
}
.flex.justify-center {
  justify-content: center;
}
.flex.space-between {
  justify-content: space-between;
}
.ml-2 {
  margin-left: 2px;
}
.mr-2 {
  margin-right: 2px;
}
.error {
  background: rosybrown;
  padding: 10px;
  color: crimson;
  text-align: center;
}
</style>
