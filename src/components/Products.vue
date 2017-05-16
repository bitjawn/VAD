<template>
    <span>
        <h2 class="header">{{title}}</h2>
        <div class="row main-body v-scroll">
            <div class="left-floater main-div">

            </div>
        </div>
    </span>
</template>

<script>
    import { mapQueries } from 'vue-pouch-db';
    export default {
        name: 'products',
        data () {
            return {
              title: 'Products'
            }
        },
        methods: {
            keyPressed: function(e){
                console.log('Input name: ' + e.target.name + '\n' + e.target.name + '\'s value: ' + e.target.value);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
