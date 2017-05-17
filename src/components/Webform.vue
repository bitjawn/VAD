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
                    <input type="submit" class="button" value="Submit" @click="submitted">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
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
   
</style>