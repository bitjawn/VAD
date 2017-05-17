<template>
    <div class="right-floater">
        <h3 class="header">{{title}} <small>{{how}}</small></h3>
        <form>
            <div class="input-group">
                <span class="input-group-label"><i class="fa fa-user" aria-hidden="true"></i></span>
                <input type="text" name="name" class="input-group-field" placeholder="Name" v-model="name" v-on:focus="clear" required>
            </div>
            
            <div class="input-group">
                <span class="input-group-label"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                <input type="email" name="email" class="input-group-field" placeholder="Email" v-model="email" v-on:focus="clear" required>
            </div>
            
            <div class="input-group">
                <span class="input-group-label"><i class="fa fa-header" aria-hidden="true"></i></span>
                <input type="text" name="subject" class="input-group-field" placeholder="Subject" v-model="subject" v-on:focus="clear">
            </div>
            
            <div class="input-group">
                <span class="input-group-label"><i class="fa fa-edit" aria-hidden="true"></i></span>                    
                <textarea class="input-group-field" name="message" placeholder="Message" v-model="message" v-on:focus="clear" required></textarea>
            </div>
            
            <div class="input-group">
                <div class="input-group-button">
                    <input type="submit" class="button" value="Submit" v-on:click="submitted">
                </div>
            </div>
        </form>
        <div class="message" v-for="message in messages">
            <p>{{message.id}}</p>
            <p>{{message.name}}</p>
            <p>{{message.email}}</p>
            <p>{{message.subject}}</p>
            <p>{{message.message}}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {        
        name: 'webform',
        data() {
            return {
                title: 'Email Us',
                how: 'Via web-mail',
                name:'',
                email:'',
                subject:'',
                message:''
            }
        },
        computed: {
            ...mapGetters(['messages'])
        },
        methods: {
            clearFields: function() {
                this.name = '';
                this.email = '';
                this.subject = '';
                this.message = '';
            },
            ...mapActions(['addNewMessage']),
            submitted: function(e) {
                e.preventDefault();
                if (this.name && this.email && this.message) {
                    let newMessage = {
                        name: this.name,
                        email: this.email,
                        subject: this.subject || 'Empty Subject',
                        message: this.message,
                    };  
                    this.$store.dispatch('addNewMessage', newMessage);
                    this.clearFields();
                }
            }
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