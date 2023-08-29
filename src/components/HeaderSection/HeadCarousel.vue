<template>
    <b-container class="mx-0">
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="1400"
            img-height="406"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <SlideComponent />
        </b-carousel>
    </b-container>
</template>

<script>
import SlideComponent from './SlideComponent.vue';
export default {
    name: 'HeadCarousel',
    data() {
        return {
            slide: 0,
            sliding: null,
        };
    },
    methods: {
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        },
    },
    components: {
        SlideComponent,
    },
};
</script>

<style>
.carousel-inner {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
}
</style>
