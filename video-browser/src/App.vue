<template>
  <div>
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";
import KEY from "./config";
const API_KEY = KEY.KEY;
console.log(API_KEY);
export default {
  name: "App",
  components: { SearchBar },
  methods: {
    //search term is e.target.value from search bar
    onTermChange: function(searchTerm) {
      console.log(searchTerm);
    },
  },
};
</script>

<style></style>
