<template>
  <div class="container">
    <skeleton-loader :count="5" v-if="loading" />
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else>
      <tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "./components/tweets/Loader.vue";
import Tweet from "./components/tweets/Tweet.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    SkeletonLoader,
    Tweet,
  },
  data() {
    return {
      tweets: [],
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      this.loading = true;
      this.error = "";
      axios
        .get("http://localhost:8000/api/tweets")
        .then((response) => {
          console.log(response);
          setTimeout(() => {
            this.tweets = response.data;
            this.loading = false;
          }, 2000);
        })
        .catch((error) => {
          console.error(error.response);
          this.loading = false;
          this.error = error.response.status + ": " + error.response.statusText;
        });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Nunito", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  /* background-color: #f1f1f1; */
  background-color: rgba(0, 0, 0, 0.8);
}

.container {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
