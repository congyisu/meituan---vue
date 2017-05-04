<template>
    <div id="movie-Container">
        <movieHeader></movieHeader>
        <movieBody></movieBody>
    </div>
</template>

<script type="es6">
import movieHeader from './movieHeader.vue';
import movieBody from './movieBody.vue';

export default {
  components: {
    movieHeader,
    movieBody
  }
}
</script>

<style lang="scss" scoped>
    #movie-Container {
        overflow-y: scroll;
    }
</style>
