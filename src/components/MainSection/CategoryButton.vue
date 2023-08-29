<template>
    <b-button
        id="custom-button"
        :variant="selected ? 'outline-cian-border' : 'cian-background'"
        class="text-black rounded-sm"
        >{{ name }}</b-button
    >
</template>

<script>
export default {
    name: 'CategoryButton',
    props: {
        name: String,
        selected: Boolean,
    },
};
</script>

<style scoped>
#custom-button {
    padding: 10px 28px;
}
</style>
