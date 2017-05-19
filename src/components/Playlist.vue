<template>
  <div class="playlist">
    <draggable v-model="entries">
      <track-entry v-for="item in entries" :track-info="item" :key="item.uuid"></track-entry>
    </draggable>
  </div>
</template>

<script>
  var uuid = require("node-uuid");
  import injector from "../javascript/injector";
  import TrackEntry from "./Track.vue";
  import draggable from "vuedraggable";
  export default {
    name: 'Playlist',
    components: {
      TrackEntry,
      draggable
    },
    mounted: injector.inject(["BusService"], (BusService) => {
      return function () {
        BusService.$on("playlistitem:clicked", function (clickedObject) {
          console.log(`you clicked: ${clickedObject.uuid}`, clickedObject);
        });
      }
    }),
    data () {
      return {
        entries: [
          {
            title: "Example",
            artist: "Someone",
            uuid: uuid.v4()
          },
          {
            title: "Example2",
            artist: "Someone else",
            uuid: uuid.v4()
          },
          {
            title: "Example abcd",
            uuid: uuid.v4()
          },
          {
            artist: "Example Artist",
            uuid: uuid.v4()
          }
        ]
      };
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
  .playlist {
  
  }

</style>
