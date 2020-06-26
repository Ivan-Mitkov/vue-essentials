<template>
  <li class="list-group-item media" @click="onVideoSelect">
    <!-- <img v-bind:src="video.snippet.thumbnails.default.url" /> -->
    <img class="mr-3" v-bind:src="thumbnailUrl" />
    <div class="media-body">
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["video"],
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    },
  },
  computed: {
    thumbnailUrl() {
      //reference prop 'video' and make changes
      return this.video.snippet.thumbnails.default.url;
    },
  },
};
</script>

<style scoped>
img {
  height: 60px;
  width: 80px;
  object-fit: cover;
  border-radius: 4px;
}
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>
