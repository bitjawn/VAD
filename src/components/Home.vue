<template>
    <span>
        <h2 class="header">{{msg}}</h2>
         <div class="row main-body v-scroll">
        <div class="left-floater main-div">
            <p>
                Odio ante duis pellentesque, non tempor non sit vitae, duis etiam curabitur mollis tristique gravida. Lectus tempor, ligula arcu dui ultrices molestiae molestiae. Arcu lacus nibh lacinia eu. Accumsan et, sollicitudin eu, semper lectus in quam consectetuer tincidunt.
            </p>
            <p>
                Et pellentesque at lacus. Est turpis quis proin eget, scelerisque sociis penatibus tellus massa, justo mauris nobis vestibulum. Wisi sapien sagittis id vel ut odio.
            </p>
            <div class="card">
                <div class="card-section">
                    <img src="/static/graphics/contact.png" class="logo">
                </div>
                <div class="card-section">
                    <p>Mauris vestibulum amet commodo nunc non hendrerit tristique nullam feugiat suscipit porttitor litora ante odio.</p>
                </div>
            </div>
        </div>
        <div class="right-floater main-div">
            <p>
                <p>Lorem ipsum dolor sit amet, fermentum porttitor, justo semper vulputate luctus tempus, urna morbi phasellus, malesuada tortor mauris nascetur morbi dignissim odio. Nam vulputate. Fermentum nullam lacus ultrices ligula enim blandit, orci feugiat nunc ante lorem lacus phasellus, consequat maecenas fusce commodo, elementum dui sem nec ac molestie.    Magna class a integer nisl ut libero.</p><p> Dolor vitae rutrum nunc vehicula aenean nullam, et donec nibh placerat sed, rutrum viverra feugiat quis mattis duis, ac erat nunc phasellus aliquam mauris, maecenas duis ut elit. Gravida mauris tellus, dui vestibulum nulla magna porta. Amet egestas varius orci reiciendis, blandit felis libero orci in sed, nisl dapibus erat mauris pretium tellus leo, pulvinar mauris vestibulum, eros in iaculis. Imperdiet dui sagittis massa sed vel. Ante proin pede, pellentesque vestibulum, lorem diam vel ullamcorper condimentum suspendisse, platea sed semper, porta justo nunc.</p>
            </p>
        </div>
    </div>
    </span>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
              msg: 'Welcome to Your Vue.js App'
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
