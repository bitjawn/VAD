<template>
    <div class="row">
        <location></location>
        <webmail></webmail>       
    </div>      
</template>

<script>
import Webmail from './WebMail'
import Location from './Location'

export default {
    name: 'contact',
    components: { Webmail, Location }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
    font-family: "Comic Sans MS", cursive, sans-serif;
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
