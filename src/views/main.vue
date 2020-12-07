<template>
    <section class="main">
        <div class="particle_wrap">
            <h2 class="head_title">
                안녕하세요 간결함과 효율적인 코드를 추구하는<br />
                8년차 웹퍼블리셔 송현석입니다.
            </h2>
            <Particles></Particles>
        </div>
        <div>
            <About></About>
        </div>
    </section>
</template>

<script>
import Particles from "../components/particles.vue";
import About from "../components/about.vue";
export default {
    components: {
        Particles,
        About,
    },
};
</script>

<style scoped lang="scss">
.particle_wrap {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .head_title {
        padding-top: 70px;
        position: relative;
        font-size: 50px;
        line-height: 1.5;
        color: #fff;
        width: 100%;
        text-align: center;
        align-self: center;
        z-index: 3;
        @media screen and (max-width: 1024px) {
            font-size: 4.8vw;
        }
        @media screen and (max-width: 768px) {
            font-size: 4.5vw;
        }
    }
}
</style>
