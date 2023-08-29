<template>
    <b-container>
        <b-row class="my-4">
            <AppBar />
        </b-row>
        <b-row class="mb-3">
            <NavBar />
        </b-row>
        <b-row class="mb-3">
            <HeadCarousel />
        </b-row>
    </b-container>
</template>

<script>
import AppBar from './AppBar.vue';
import NavBar from './NavBar.vue';
import HeadCarousel from './HeadCarousel.vue';

export default {
    name: 'HeaderSection',
    components: {
        AppBar,
        NavBar,
        HeadCarousel,
    },
};
</script>
