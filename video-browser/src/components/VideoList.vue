<template>
  <ul>
    Video List
    {{videos}}
  </ul>
</template>

<script>
export default {
  name: "VideoList",
  // props: ["videos"],
  props: { videos: Array },
};
</script>

<style></style>
