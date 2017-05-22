<template>
  <div class="playlist-entry">
    <div class="shadow-container">
      <div class="dragzone">:::</div>
      <div class="title">{{ trackInfo.title || "Unknown Title" }}</div>
      <div class="artist">{{ trackInfo.artist || "Unknown Artist" }}</div>
    </div>
  </div>
</template>

<script>
  import Playlist from "./Playlist";
  export default {
    components: {
      Playlist
    },
    name: 'TrackEntry',
    props: ["trackInfo"],
    data () {
      return {};
    },
    computed: {
      playlist: {
        get() {
          return this.$store.getters.getPlaylist(this.id);
        },
        set(value) {
          this.$store.commit('updatePlaylist', {
            id: this.id,
            value: value
          });
        }
      },
      name: {
        get() {
          return this.$store.getters.getPlaylistName(this.id);
        },
        set(value) {
          this.$store.commit('updatePlaylistName', {
            id: this.id,
            value: value
          });
        }
      }
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .playlist-entry {
    display: flex;
    justify-content: center;
    .shadow-container {
      box-shadow: 3px 3px 10px 0px black;
      border: black solid 1px;
      background-color: lightgray;
      width: 100%;
      display: flex;
      justify-content: space-between;
      .dragzone {
        border-right: black solid 1px;
        background-color: darkgray;
        cursor: -webkit-grab;
        cursor: hand;
      }
      .title {
        flex-basis: 20%;
      }
      .artist {
        flex-basis: 40%;
      }
    }
  }
</style>
