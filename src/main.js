// Import Vue
import Vue from "vue";

import "styles/index.scss";

import App from "./components/App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
});
