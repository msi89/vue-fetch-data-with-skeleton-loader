<template>
  <div class="tweet flex" :class="theme" v-if="tweet">
    <div class="tweet-image-box">
      <img :src="tweet.avatar" alt="avatar" class="rounded-full" />
    </div>
    <div class="flex flex-col">
      <div class="tweet-title">
        <span class="font-semibold">{{ tweet.fullname }}</span>
        <span class="text-grey-darker">{{ tweet.username }}</span>
        <span class="text-grey-darker">·</span>
        <span class="text-grey-darker">2h</span>
      </div>
      <div class="tweet-quote">{{ tweet.quote }}</div>
      <div class="tweet-actions flex space-between">
        <div class="flex items-center">
          <div>
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              width="20"
              height="20"
            >
              <path
                d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2zM20 5H4v10h13a1 1 0 0 1 .7.3l2.3 2.29V5z"
                class="heroicon-ui"
              ></path>
            </svg>
          </div>
          <div class="ml-2">{{ tweet.comments }}</div>
        </div>
        <div class="flex items-center">
          <div>
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              width="24"
              height="24"
            >
              <path
                d="M5.41 16H18a2 2 0 0 0 2-2 1 1 0 0 1 2 0 4 4 0 0 1-4 4H5.41l2.3 2.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.4L5.4 16zM6 8a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4h12.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4L18.6 8H6z"
                class="heroicon-ui"
              ></path>
            </svg>
          </div>
          <div class="ml-2">{{ tweet.retweets }}</div>
        </div>
        <div class="flex items-center">
          <div>
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              width="24"
              height="24"
            >
              <path
                d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
                class="heroicon-ui"
              ></path>
            </svg>
          </div>
          <div class="ml-2">{{ tweet.likes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweet: { type: Object, required: true },
    theme: { type: String, required: "light" },
  },
};
</script>

<style scoped>
.tweet {
  background-color: #fff;
  color: #111;
  padding: 10px;
  border-bottom: 1px solid #e2e8f0;
}
.tweet:last-child {
  border-bottom: 0;
}
.tweet.dark {
  background-color: rgba(0, 0, 0, 0.2);
  color: #999;
  border-bottom: 1px solid #555;
}
.tweet-image-box {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
}
.tweet-image-box img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}
.tweet-quote {
  margin: 15px 0;
}
.font-semibold {
  font-weight: 600;
}
.tweet-actions > div {
  flex: 1px;
  cursor: pointer;
}
.tweet-actions > div:hover,
.tweet-actions > div:hover svg {
  color: rebeccapurple;
  fill: rebeccapurple;
}

.tweet.dark .tweet-actions > div:hover,
.tweet.dark .tweet-actions > div:hover svg {
  color: #555;
  fill: #555;
}
</style>
