<template>
  <div>
    <!-- <input v-on:input="onInput" type="text" /> -->
    <input @input="onInput" type="text" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(e) {
      // console.dir(this)
      //emit event to communicate with parent component
      this.$emit("termChange", e.target.value);
    },
  },
};
</script>
// affect only this file
<style scoped>
input {
  width: 75%;
  padding: 10px 20px;
  font-size: 20px;
}

div {
  text-align: center;
  margin: 20px;
}
</style>
