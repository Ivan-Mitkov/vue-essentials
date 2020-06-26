<template>
  <!-- bootstrap assumes everything is wrapped in class container -->
  <div class="container">
    <!-- <SearchBar v-on:termChange="onTermChange"></SearchBar> -->
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
    <VideoDetail v-bind:video="selectedVideo"></VideoDetail>
    <!-- <VideoList v-bind:videos="videos"></VideoList> -->
    <VideoList v-on:videoSelect="onVideoSelect" :videos="videos"></VideoList>

    </div>
    <!-- {{videos.length}} -->
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import KEY from "./config";

const API_KEY = KEY.KEY;
console.log(API_KEY.toString());
export default {
  name: "App",
  components: { SearchBar, VideoList, VideoDetail },
  data: function() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    //search term is e.target.value from search bar
    onTermChange: function(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm,
          },
        })
        .then((data) => {
          //set state with [] from response.data.items
          this.videos = data.data.items;
        })
        .catch((err) => console.log(err.message));
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
      console.log(this.selectedVideo.snippet.title)
    },
  },
};
</script>

<style></style>
