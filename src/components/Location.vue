<template>
        <div class="left-floater">
            <h3 class="header">{{title}} <small>Use snail-mail or call</small></h3>
            <div class="row">
                    <mailaddress></mailaddress>
                </div>
                <div class="row">
                    <geomap></geomap>
                </div>
            </div>
        </div>
</template>

<script>
    import Mailaddress from './Mailaddress'
    import Geomap from './Geomap'

    export default {
        data () {
            return {
                title: 'Contact Us'
            }
        },
        name: 'location',
        components: { Mailaddress, Geomap }
    }
</script>

<style>

</style>