<template>
     <div class="right-floater">
            <h3 class="header">{{sender}} <small>Web Mail</small></h3>
            <form method="post" action="/contact">
                     <div class="input-group">
                        <span class="input-group-label"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" name="name" class="input-group-field" placeholder="Name" required>
                    </div>
                    
                    <div class="input-group">
                        <span class="input-group-label"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input type="email" name="email" class="input-group-field" placeholder="Email" required>
                    </div>
                    
                     <div class="input-group">
                        <span class="input-group-label"><i class="fa fa-header" aria-hidden="true"></i></span>
                        <input type="text" name="subject" class="input-group-field" placeholder="Subject">
                    </div>
                    
                    <div class="input-group">
                        <span class="input-group-label"><i class="fa fa-edit" aria-hidden="true"></i></span>                    
                        <textarea class="input-group-field message" name="message" placeholder="Message" ></textarea>
                    </div>
                    
                    <div class="input-group">
                        <div class="input-group-button">
                            <input type="submit" class="button" value="Submit">
                        </div>
                    </div>
                </form>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                sender: 'Send us a message'
            }
        },
        name: 'webmail'
    }
</script>

<style>

</style>