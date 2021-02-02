<template>
    <div class="gnb">
        <div class="gnb_wrap">
            <h1>Simple but Effective..</h1>
            <router-link to="/main">Home</router-link>
            <router-link to="/works">Portfolio</router-link>
            <router-link to="/playground">Playground</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.gnb {
    position: fixed;
    top: 0;
    background: #1b242f;
    border-bottom: 3px solid #04c2c9;
    width: 100%;
    z-index: 200;
    .gnb_wrap {
        max-width: 1200px;
        padding: 0 40px;
        margin: 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
        @media screen and (max-width: 768px) {
            justify-content: center;
        }
        h1 {
            color: #fff;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
        a {
            color: #fff;
            margin-left: auto;
            @media screen and (max-width: 768px) {
                margin: 0 15px;
            }
            &:nth-child(3),
            &:last-child {
                margin-left: 20px;
                @media screen and (max-width: 768px) {
                    margin-left: 0;
                }
            }
            &.router-link-active {
                color: #e31b6d;
            }
        }
    }
}
</style>
