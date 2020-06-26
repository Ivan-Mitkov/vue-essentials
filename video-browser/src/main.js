import Vue from "vue";
import App from "./App";

//Create new Vue Instance
new Vue({
  //identical with .$mount('#app')
  // el: "#app",
  render: function(createElement) {
    return createElement(App);
  },
}).$mount("#app");

