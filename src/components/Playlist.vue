<template>
  <div class="playlist">
    <div>
      <span>{{name}}</span>
      <div class="dragzone" v-if="sublist === 'true'">:::</div>
    </div>
    <draggable :options="draggableOpts" class="dragable" v-model="playlist">
      <transition-group name="track-entry-list">
        <div v-for="item in playlist" :key="item.uuid">
          <track-entry v-if="item.type === 'track'" class="track" :track-info="item" :id="info.id"></track-entry>
          <playlist class="sub-playlist" v-else :info="item" sublist="true"></playlist>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import TrackEntry from "./Track.vue";
  import draggable from "vuedraggable";

  export default {
    name: 'Playlist',
    props: ["info", "sublist"],
    components: {
      TrackEntry,
      draggable
    },
    computed: {
      playlist: {
        get() {
          return this.$store.getters.getPlaylist(this.info.id);
        },
        set(value) {
          this.$store.commit('updatePlaylist', {
            id: this.info.id,
            value: value
          });
        }
      },
      name: {
        get() {
          return this.$store.getters.getPlaylistName(this.info.id);
        },
        set(value) {
          this.$store.commit('updatePlaylistName', {
            id: this.info.id,
            value: value
          });
        }
      }
    },
    data () {
      return {
        draggableOpts: {
          handle: ".dragzone",
          animation: 100
        }
      };
    },
    methods: {
      drag(event) {
        console.log(event);
        event.stopPropagation();
        event.preventDefault();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  
  .playlist {
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
    .dragzone {
      cursor: -webkit-grab;
      cursor: hand;
    }
    .dragable {
      flex-basis: 95%;
      .track {
        flex-basis: 90%;
        padding: 3px;
      }
      .track-entry-list-move {
        transition: transform 0.0s;
      }
    }
    .sub-playlist {
      margin-top: 10px;
    }
    
  }


</style>
