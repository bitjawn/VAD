<template>  
    <div class="left-floater">  
        <div class="row">
            <h3 class="header">{{title}} <small>{{how}}</small></h3>
            <p class="text-left contact-address">
                Company Name and Sub-Name</br>
                12345 Jump Street, Suite 6789</br>
                Philadelphia, PA 19100-2468</br>
                484-922-3530
            </p>
        </div>
        <div class="container user-messages v-scroll">
            <div class="message clearfix" v-for="message in messages">
                <p><b>Sender: </b>{{message.name}}</br>
                <b>Email: </b> {{message.email}}</br>
                <b>Subject:  </b>{{message.subject}}</br>
                <b>Message: </b> {{message.message}}</p>
                <button @click="deleteMessage(message.id)" class="alert button pull-left">Delete</button>
                <button class="success button pull-right">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'snailmail',
        data () {
            return {
                title: 'Contact Us',
                how: 'Via snail-mail or phone'
            }
        },
        methods: {
            ...mapActions(['removeUserMesssage']),
            deleteMessage: function(id) {
                this.$store.dispatch('removeUserMessage', id);
            }
        },
        computed: {
            ...mapGetters(['messages'])
        }
    }
</script>

<style scoped>
    .message {
        border:solid 1pt #aaa;
        background-color:#fff;
        font-weight:888;
        padding:5px;
        margin:5px;
        text-align:left;
    }
</style>