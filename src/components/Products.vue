<template>
    <span>
        <h2 class="header">{{title}}</h2>
        <div class="row v-scroll">
            <div class="left-floater">
                
            </div>
        </div>
    </span>
</template>

<script>    
     
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
        },
        beforeCreate: function() {
        var db = new PouchDB('http://localhost:5984/menu');

        db.info().then(function (info) {
          console.log(info);
        });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
