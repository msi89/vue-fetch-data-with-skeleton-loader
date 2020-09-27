import { ref } from 'vue'
import axios from 'axios'

export const useTweet = () => {
  let tweets = ref([])
  let loading = ref(false)
  let error = ref('')

  async function fetchTweets() {
    loading.value = true
    error.value = ''
    try {
      const response = await axios.get(`http://localhost:8000/api/tweets`)
      setTimeout(() => {
        tweets.value = response.data
        loading.value = false
      }, 2000)
    } catch (err) {
      error.value = err.response.statusText
    }
  }

  return {
    tweets,
    loading,
    error,
    fetchTweets
  }
}
