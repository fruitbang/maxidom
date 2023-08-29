<template>
    <b-container class="mt-5">
        <b-row class="mx-0 mb-4">
            <h1 class="text-start font-weight-semibold">Почему нас выбирают</h1>
        </b-row>
        <b-row>
            <b-col md="12" lg="4" order-md="1" order-lg="0" class="mb-2">
                <div class="d-flex h-100 flex-column justify-content-between">
                    <InfoLinkCard class="mb-2" msg="Гарантия 5 лет"
                        ><svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.7 35.9L3.5 24.7L5.65 22.55L14.7 31.6L16.85 33.75L14.7 35.9ZM23.2 35.9L12 24.7L14.15 22.55L23.2 31.6L42.4 12.4L44.55 14.55L23.2 35.9ZM23.2 27.4L21.05 25.25L33.9 12.4L36.05 14.55L23.2 27.4Z"
                                fill="#94DEB2"
                            /></svg
                    ></InfoLinkCard>
                    <InfoLinkCard class="mb-2" msg="Удобная доставка"
                        ><svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_101_337)">
                                <path
                                    d="M7.85 38C5.68333 38 3.83333 37.2417 2.3 35.725C0.766667 34.2083 0 32.35 0 30.15C0 27.95 0.758333 26.0917 2.275 24.575C3.79167 23.0583 5.63333 22.3 7.8 22.3L5.45 20.5H0V18H9.05L14 21L21.95 18H28.95L25.05 13H20.6V10H26.55L30.85 15.55L37.3 12.35V17.55H32.4L36.65 23.05C37.2167 22.8167 37.7833 22.6417 38.35 22.525C38.9167 22.4083 39.5 22.35 40.1 22.35C42.3 22.35 44.1667 23.1083 45.7 24.625C47.2333 26.1417 48 28 48 30.2C48 32.4 47.2333 34.25 45.7 35.75C44.1667 37.25 42.3 38 40.1 38C37.9333 38 36.0917 37.2417 34.575 35.725C33.0583 34.2083 32.3 32.3667 32.3 30.2C32.3 29.2 32.4667 28.25 32.8 27.35C33.1333 26.45 33.6333 25.6333 34.3 24.9L32.55 22.65L25.25 33.8H19.75L15.7 30.15C15.7 32.35 14.9417 34.2083 13.425 35.725C11.9083 37.2417 10.05 38 7.85 38ZM7.85 35C9.21667 35 10.3667 34.525 11.3 33.575C12.2333 32.625 12.7 31.4833 12.7 30.15C12.7 28.8167 12.2333 27.675 11.3 26.725C10.3667 25.775 9.21667 25.3 7.85 25.3C6.51667 25.3 5.375 25.7667 4.425 26.7C3.475 27.6333 3 28.7833 3 30.15C3 31.5167 3.475 32.6667 4.425 33.6C5.375 34.5333 6.51667 35 7.85 35ZM40.1 35C41.4667 35 42.625 34.5333 43.575 33.6C44.525 32.6667 45 31.5333 45 30.2C45 28.8333 44.525 27.675 43.575 26.725C42.625 25.775 41.4667 25.3 40.1 25.3C38.7667 25.3 37.6333 25.775 36.7 26.725C35.7667 27.675 35.3 28.8333 35.3 30.2C35.3 31.5333 35.7667 32.6667 36.7 33.6C37.6333 34.5333 38.7667 35 40.1 35ZM23.65 30.8L30.05 21H22.55L13.9 24.25L20.85 30.8H23.65Z"
                                    fill="#94DEB2"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_101_337">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs></svg
                    ></InfoLinkCard>
                    <InfoLinkCard msg="Низкие цены"
                        ><svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.5 42V35.5H10V32.5H14.5V27H10V24H14.5V6H27.5C30.4273 6 32.9091 7.0188 34.9454 9.0564C36.9818 11.094 38 13.5773 38 16.5064C38 19.4355 36.9818 21.9167 34.9454 23.95C32.9091 25.9833 30.4273 27 27.5 27H17.5V32.5H26V35.5H17.5V42H14.5ZM17.5 24H27.5C29.6 24 31.375 23.275 32.825 21.825C34.275 20.375 35 18.6 35 16.5C35 14.4 34.275 12.625 32.825 11.175C31.375 9.725 29.6 9 27.5 9H17.5V24Z"
                                fill="#94DEB2"
                            /></svg
                    ></InfoLinkCard>
                </div>
            </b-col>
            <b-col
                md="12"
                lg="4"
                class="mb-2"
                order-md="0"
                order-lg="1"
                id="img-container"
            >
                <div id="img"></div>
            </b-col>
            <b-col md="12" lg="4" order="2" class="mb-2">
                <div class="f-flex p-5 h-100 border rounded bg-bilie">
                    <p id="info-main" class="mb-5">
                        Стереосистемы - то есть, системы, собранные на базе пары
                        громкоговорителей, предназначены в первую очередь для
                        прослушивания музыки, а не для просмотра фильмов.
                    </p>
                    <small id="info-secondary" class="text-muted">
                        При выборе стереосистемы следует определиться с источником
                        сигнала: возможно, это будет сетевой или медиаплеер, CD
                        проигрыватель, радиотюнер, виниловый проигрыватель - или даже все
                        эти компоненты сразу. Здесь вы должны исходить исключительно.
                    </small>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import InfoLinkCard from './InfoLinkCard';

export default {
    name: 'InfoSection',
    props: {
        msg: String,
    },
    components: {
        InfoLinkCard,
    },
};
</script>

<style scoped>
#img-container {
    min-height: 400px;
    border-radius: 10px;
}

#img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: black;
    background-image: url('../../assets/aparatura.png');
    background-position: center;
    background-size: cover;
}

#info-main {
    font-size: 18px;
}

#info-secondary {
    font-size: 18px;
}
</style>
