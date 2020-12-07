<template>
    <div id="app">
        <Nav></Nav>
        <transition name="page">
            <router-view></router-view>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from "./components/navigation.vue";
import Footer from "./components/footer.vue";
export default {
    components: {
        Nav,
        Footer,
    },
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
.page-enter-active {
    transition: opacity 0.5s;
}
.page-leave-active {
}
.page-enter,
.page-leave-to {
    opacity: 0;
}
</style>
