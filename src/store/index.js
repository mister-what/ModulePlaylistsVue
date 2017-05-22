/**
 * Created by Jonas on 22.05.17. (c) 2017
 */
import Vue from "vue";
import Vuex from "vuex";

var uuid = require("node-uuid");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playlists: {
      playlist2: {
        name: "Second Playlist",
        playlist: [
          {
            title: "Example BLA",
            artist: "Anyone else",
            type: "track",
            uuid: uuid.v4()
          },
          {
            title: "Example BLA 2",
            artist: "Someone else",
            type: "track",
            uuid: uuid.v4()
          }
        ]
      },
      playlist1: {
        name: "First Playlist",
        playlist: [
          {
            title: "Example",
            artist: "Someone",
            type: "track",
            uuid: uuid.v4()
          },
          {
            title: "Example2",
            artist: "Someone else",
            type: "track",
            uuid: uuid.v4()
          },
          {
            title: "Example abcd",
            type: "track",
            uuid: uuid.v4()
          },
          {
            artist: "Example Artist",
            type: "track",
            uuid: uuid.v4()
          },
          {
            type: "playlist",
            uuid: "playlist2"
          }
        ]
      }
    }
  },
  mutations: {
    updatePlaylist(state, change) {
      console.log(change);
      state.playlists[change.uuid].playlist = change.value;
    },
    updatePlaylistName(state, change) {
      console.log(change);
      state.playlists[change.uuid].name = change.value;
    }
  }
});
