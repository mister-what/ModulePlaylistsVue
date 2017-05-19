<template>
  <div class="playlist-entry">
    <div class="shadow-container" @click="sendMessage()">
      <div class="dragzone">:::</div>
      <div class="title">{{ trackInfo.title || "Unknown Title" }}</div>
      <div class="artist">{{ trackInfo.artist || "Unknown Artist" }}</div>
    </div>
  </div>
</template>

<script>
  import injector from "../javascript/injector";
  export default {
    name: 'TrackEntry',
    props: ["trackInfo"],
    data () {
      return {};
    },
    methods: {
      sendMessage: injector.inject(["BusService"], (BusService) => {
        return function () {
          BusService.$emit("playlistitem:clicked", this.trackInfo);
        };
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .playlist-entry {
    padding: 15px;
    display: flex;
    justify-content: center;
    .shadow-container {
      box-shadow: 3px 3px 30px 3px black;
      border: black solid 1px;
      background-color: lightgray;
      width: 70%;
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
