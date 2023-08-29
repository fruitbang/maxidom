<template>
    <b-carousel-slide id="img-container">
        <template #img>
            <img
                id="img"
                class="d-block h-50"
                width="502"
                height="404"
                src="../../assets/29b4b920f7268a75daad0d25f930db5c.png"
                alt="image slot"
            />
        </template>
    </b-carousel-slide>
</template>

<script>
export default {
    name: 'SlideComponent',
};
</script>

<style scoped>
#img-container {
    width: 100%;
    max-height: 406px;
    display: flex !important;
    justify-content: center;
    background: rgb(172, 224, 240);
    background: linear-gradient(
        90deg,
        rgba(172, 224, 240, 1) 0%,
        rgba(190, 252, 215, 1) 50%,
        rgba(188, 225, 237, 1) 100%
    );
}
</style>
