<template>
  <div id="app">
    <h1 class="comment-box">Comment Box</h1>
    <ul class="comment-list">
      <Comment 
        v-if="commentDetails.length"
        :commentDetail="commentDetails"/>
    </ul>
  </div>
</template>

<script>
  import Comment from '@/components/views/Comment.vue' // Comment component
  import commentDetails from '@/components/data/commentDetails' // Object containing the comment details

export default {
  name: 'App',
  components: {
    Comment
  },
  data() {
    return {
      commentDetails // Comment details array state
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.comment-list {
  list-style-type: none;
}
</style>
