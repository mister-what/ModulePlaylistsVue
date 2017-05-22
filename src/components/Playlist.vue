<template>
  <div class="playlist">
    <div>
      <span>{{name}}</span>
      <div class="dragzone" v-if="sublist === 'true'">:::</div>
    </div>
    <draggable class="dragable" v-model="playlist">
      <transition-group name="track-entry-list">
        <div v-for="item in playlist" :key="item.uuid">
          <track-entry v-if="item.type === 'track'" class="track" :track-info="item"></track-entry>
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
          return this.$store.state.playlists[this.info.uuid].playlist;
        },
        set(value) {
          this.$store.commit('updatePlaylist', {
            uuid: this.info.uuid,
            value: value
          });
        }
      },
      name: {
        get() {
          return this.$store.state.playlists[this.info.uuid].name;
        },
        set(value) {
          this.$store.commit('updatePlaylistName', {
            uuid: this.info.uuid,
            value: value
          });
        }
      }
    },
    data () {
      return {
      };
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
        transition: transform 0.1s;
      }
    }
    .sub-playlist {
      margin-top: 10px;
    }
    
  }


</style>
