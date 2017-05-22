<template>
  <playlist :info="playlist"></playlist>
</template>

<script>
  import Playlist from "./Playlist";
  export default {
    components: {Playlist},
    name: 'hello',
    data () {
      return {
        playlist: {
          uuid: "playlist1"
        },
        msg: 'Welcome to Your Vue.'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1, h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>
