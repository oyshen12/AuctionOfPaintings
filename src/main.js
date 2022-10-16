// Import Vue
import Vue from "vue";
import store from "./store";
import "styles/index.scss";
import VueEllipseProgress from "vue-ellipse-progress";
import App from "./components/App.vue";

Vue.use(VueEllipseProgress);

new Vue({
  store,
  el: "#app",
  render: (h) => h(App),
});
