<template>
  <div class="container tweet-box">
    <skeleton-loader :count="4" v-if="loading" :theme="theme" />
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <tweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        :theme="theme"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { useTweet } from '../modules/tweets'
import SkeletonLoader from '../components/tweets/Loader'
import Tweet from '../components/tweets/Tweet'

export default defineComponent({
  name: 'TweetView',
  props: { theme: String },
  components: { Tweet, SkeletonLoader },
  setup() {
    const { tweets, loading, error, fetchTweets } = useTweet()

    onMounted(() => {
      fetchTweets()
    })

    return {
      loading,
      error,
      tweets
    }
  }
})
</script>

<style>
.tweet-box {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
