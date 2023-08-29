<template>
    <div
        class="d-flex flex-column w-100 h-100 justify-content-center align-items-center text-center rounded bg-bilie"
    >
        <slot />
        <h5>{{ msg }}</h5>
    </div>
</template>

<script>
export default {
    name: 'InfoLinkCard',
    props: {
        msg: String,
        icon: String,
    },
};
</script>
