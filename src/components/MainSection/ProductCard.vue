<template>
    <b-card class="m-0 p-2 h-100">
        <b-card-title v-if="newProduct" class="position-absolute mt-3"
            ><b-button variant="olive" class="py-1 px-4 rounded-sm"
                >New</b-button
            ></b-card-title
        >
        <b-card-img :src="require(`/src/assets/${img}`)" :alt="description"></b-card-img>
        <b-card-text class="d-flex flex-column justify-content-between h-25">
            {{ description }}
            <div class="d-flex justify-content-between align-items-center">
                <h4 class="font-weight-bolder mb-0">{{ price }}</h4>
                <b-button class="px-4 rounded-sm" :variant="selected ? 'dark' : 'olive'"
                    ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.5 22C4.1 22 3.75 21.85 3.45 21.55C3.15 21.25 3 20.9 3 20.5V7.25C3 6.85 3.15 6.5 3.45 6.2C3.75 5.9 4.1 5.75 4.5 5.75H7.25C7.25 4.43333 7.69167 3.3125 8.575 2.3875C9.45833 1.4625 10.5583 1 11.875 1C13.1917 1 14.3333 1.46313 15.3 2.38938C16.2667 3.31563 16.75 4.43583 16.75 5.75H19.5C19.9 5.75 20.25 5.9 20.55 6.2C20.85 6.5 21 6.85 21 7.25V20.5C21 20.9 20.85 21.25 20.55 21.55C20.25 21.85 19.9 22 19.5 22H4.5ZM4.5 20.5H19.5V7.25H4.5V20.5ZM12 13.25C13.3167 13.25 14.4583 12.7667 15.425 11.8C16.3917 10.8333 16.875 9.69167 16.875 8.375H15.375C15.375 9.29167 15.0417 10.0833 14.375 10.75C13.7083 11.4167 12.9167 11.75 12 11.75C11.0833 11.75 10.2917 11.4167 9.625 10.75C8.95833 10.0833 8.625 9.29167 8.625 8.375H7.125C7.125 9.69167 7.60833 10.8333 8.575 11.8C9.54167 12.7667 10.6833 13.25 12 13.25ZM8.75 5.75H15.25C15.25 4.83333 14.9375 4.0625 14.3125 3.4375C13.6875 2.8125 12.9167 2.5 12 2.5C11.0833 2.5 10.3125 2.8125 9.6875 3.4375C9.0625 4.0625 8.75 4.83333 8.75 5.75Z"
                            fill="#F1F1F1"
                        /></svg
                ></b-button>
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        price: String,
        img: String,
        description: String,
        selected: Boolean,
        newProduct: Boolean,
    },
};
</script>
