<template>
  <div>
    <!-- <SearchBar v-on:termChange="onTermChange"></SearchBar> -->
    <SearchBar @termChange="onTermChange"></SearchBar>
    <!-- <VideoList v-bind:videos="videos"></VideoList> -->
    <VideoList :videos="videos"></VideoList>
    <!-- {{videos.length}} -->
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import KEY from "./config";

const API_KEY = KEY.KEY;
console.log(API_KEY.toString());
export default {
  name: "App",
  components: { SearchBar, VideoList },
  data: function() {
    return {
      videos: [],
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
  },
};
</script>

<style></style>
