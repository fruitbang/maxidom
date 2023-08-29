<template>
    <div id="app">
        <b-container class="px-0">
            <HeaderSection />
            <MainSection />
            <InfoSection />
        </b-container>
    </div>
</template>

<script>
import MainSection from './components/MainSection/MainSection';
import InfoSection from './components/InfoSection/InfoSection';
import HeaderSection from './components/HeaderSection/HeaderSection';

export default {
    name: 'App',
    components: {
        HeaderSection,
        MainSection,
        InfoSection,
    },
};
</script>

<style lang="scss">
#app {
    @import 'assets/custom-vars.scss';

    @import '~bootstrap/scss/bootstrap.scss';
    @import '~bootstrap-vue/src/index.scss';

    font-family: 'Golos Text', sans-serif;

    .font-weight-semibold {
        font-weight: 600;
    }

    h1 {
        font-size: 36px;
    }
}
</style>
