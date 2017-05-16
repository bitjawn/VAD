<template>
        <div class="center-floater">
            <h3 class="header">{{title}}</h3>
            <div class="row">
                <geomap></geomap>
            </div>
        </div>
</template>

<script>
    import Geomap from './Geomap'

    export default {
        name: 'location',
        data() {
            return {title: 'Locate Us'}
        },
        components: { Geomap }
    }
</script>

<style>

</style>