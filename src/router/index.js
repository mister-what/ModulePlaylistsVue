import Vue from "vue";
import Router from "vue-router";
import Hello from "../components/Hello.vue";
import Playlist from "../components/Playlist.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/playlist",
      name: "Playlist",
      component: Playlist
    }
  ]
});