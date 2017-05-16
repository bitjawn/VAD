<template>  
    <div class="left-floater">
        <h3 class="header">{{title}} <small>{{how}}</small></h3>
        <p class="text-left contact-address">
            Company Name and Sub-Name</br>
            12345 Jump Street, Suite 6789</br>
            Philadelphia, PA 19100-2468</br>
            484-922-3530
        </p>
    </div>
</template>

<script>
    export default {
        name: 'snailmail',
        data () {
            return {
                title: 'Contact Us',
                how: 'Via snail-mail or phone'
            }
        }
    }
</script>

<style>

</style>