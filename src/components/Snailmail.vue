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
        <div class="row">
            <div class="message" v-for="message in messages">
                <p>{{message.id}}</p>
                <p>{{message.name}}</p>
                <p>{{message.email}}</p>
                <p>{{message.subject}}</p>
                <p>{{message.message}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'snailmail',
        data () {
            return {
                title: 'Contact Us',
                how: 'Via snail-mail or phone'
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