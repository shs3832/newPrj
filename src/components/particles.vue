<template>
    <div class="particles">
        <div id="particles-js"></div>
        <div class="scroll">
            <div class="field">
                <div class="mouse"></div>
            </div>
        </div>
    </div>
</template>

<script>
import "particles.js";
export default {
    name: "particles",
    mounted() {
        this.initParticles();
    },
    methods: {
        initParticles() {
            window.particlesJS("particles-js", {
                particles: {
                    number: {
                        value: 355,
                        density: {
                            enable: true,
                            value_area: 789.1476416322727,
                        },
                    },
                    color: {
                        value: ["#000000", "#1b242f", "#04c2c9", "#e31b6d"],
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000",
                        },
                        polygon: {
                            nb_sides: 5,
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 100,
                        },
                    },
                    opacity: {
                        value: 0.48927153781200905,
                        random: false,
                        anim: {
                            enable: true,
                            speed: 0.2,
                            opacity_min: 0,
                            sync: false,
                        },
                    },
                    size: {
                        value: 2,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: false,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: true,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble",
                        },
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 400,
                            line_linked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 83.91608391608392,
                            size: 1,
                            duration: 3,
                            opacity: 1,
                            speed: 3,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        push: {
                            particles_nb: 4,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                retina_detect: true,
            });
        },
    },
};
</script>

<style scoped lang="scss">
#particles-js {
    background: black;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.field {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 300px;
    position: absolute;
    bottom: 20px;
    z-index: 5;
    left: 50%;
    transform: translateX(-50%) scale(0.5);
}

.mouse {
    width: 50px;
    height: 90px;
    border: 3px solid #fff;
    border-radius: 60px;
    position: relative;
    &::before {
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border-radius: 50%;
        opacity: 1;
        animation: wheel 2s infinite;
        -webkit-animation: wheel 2s infinite;
    }
}

@keyframes wheel {
    to {
        opacity: 0;
        top: 60px;
    }
}

@-webkit-keyframes wheel {
    to {
        opacity: 0;
        top: 60px;
    }
}
</style>
