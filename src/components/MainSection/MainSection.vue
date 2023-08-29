<template>
    <b-container class="mt-5">
        <b-row class="mx-0 mb-4">
            <h1 class="text-start font-weight-semibold">Категории</h1>
        </b-row>
        <b-row align-h="between" class="mb-4">
            <b-col sm="12" lg="8" class="mb-3 d-flex justify-content-start">
                <b-row>
                    <b-col v-for="cat in categories" :key="cat.id">
                        <CategoryButton
                            class="my-2"
                            :name="cat.name"
                            :selected="cat.selected"
                        />
                    </b-col>
                </b-row>
            </b-col>
            <b-col
                sm="12"
                lg="4"
                class="mb-3 d-flex justify-content-end align-items-center"
            >
                Сортировать:
                <b-form-select
                    id="custom-select"
                    class="ml-2 rounded-sm"
                    v-model="selected"
                    :options="options"
                ></b-form-select>
            </b-col>
        </b-row>
        <b-row
            ><b-col v-for="item in items" :key="item.id" lg="3" md="4" sm="6" class="mb-3"
                ><ProductCard
                    :name="item.name"
                    :description="item.description"
                    :selected="item.selected"
                    :price="item.price"
                    :newProduct="item.newProduct"
                    :img="item.img" /></b-col
        ></b-row>
    </b-container>
</template>

<script>
import CategoryButton from './CategoryButton.vue';
import ProductCard from './ProductCard.vue';

export default {
    name: 'MainSection',
    data() {
        return {
            selected: 0,
            options: [
                { value: 0, text: 'По популярности' },
                { value: 1, text: 'По возрастанию цены' },
                { value: 2, text: 'По убыванию цены' },
            ],
            categories: [
                {
                    name: 'Категории',
                    selected: true,
                },
                {
                    name: 'Микрофоны',
                    selected: false,
                },
                {
                    name: 'Аккустика',
                    selected: false,
                },
                {
                    name: 'Наушники',
                    selected: false,
                },
            ],
            items: [
                {
                    id: 0,
                    newProduct: true,
                    description: 'Микрофон “СОЮЗ Malfa”, производства фирмы Октава',
                    price: '265 900₽',
                    selected: false,
                    img: 'malfablack.png',
                },
                {
                    id: 1,
                    newProduct: false,
                    description: 'Акустическая система Magnat Transpuls 800A',
                    price: '62 070₽',
                    selected: false,
                    img: '185298dafce6878e818de11c0c86cad4.png',
                },
                {
                    id: 2,
                    newProduct: true,
                    description: 'Микрофон “СОЮЗ Bomblet”, производства фирмы Октава',
                    price: '72 100₽',
                    selected: true,
                    img: 'malfasilver.png',
                },
                {
                    id: 3,
                    newProduct: true,
                    description: 'Наушники CCA C10 Black with mic',
                    price: '125 300₽',
                    selected: false,
                    img: '0d215751d77a0b67444e4ec8cd60a9ed.png',
                },
                {
                    id: 4,
                    newProduct: false,
                    description: 'Наушники Edifier HECATE G5BT black',
                    price: '11 900₽',
                    selected: false,
                    img: '17e456b0af2780e56235a7e89111b45c.png',
                },
                {
                    id: 5,
                    newProduct: false,
                    description: 'Микрофон “Lewitt LCT540SUBZERO”',
                    price: '25 170₽',
                    selected: false,
                    img: 'e838faa7109bc2db65754d1bf8b6e1fa.png',
                },
                {
                    id: 6,
                    newProduct: false,
                    description: 'Полочная акустика Klipsch RP-500M II Walnut',
                    price: '1 100₽',
                    selected: false,
                    img: '6dfd819b042acad21d7c32108b8ddec1.png',
                },
                {
                    id: 7,
                    newProduct: true,
                    description: 'RODE XCM-50 usb',
                    price: '13 445₽',
                    selected: false,
                    img: '47c0e6996966f0c3cf6ff594dab41782.png',
                },
            ],
        };
    },
    components: {
        CategoryButton,
        ProductCard,
    },
};
</script>

<style scoped lang="scss">
@import '/src/assets/custom-vars.scss';

#custom-select {
    border-color: $cian-border;
    box-shadow: none;
}

#custom-select:focus {
    border-color: $olive;
    box-shadow: 0px 0px 14px 0px $olive;
}
</style>
