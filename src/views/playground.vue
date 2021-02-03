<template>
    <section class="playground">
        <div class="playground_wrap">
            <h2><i class="fas fa-desktop"></i>Git Repository</h2>

            <p>
                업무 진행시 혹은 틈날때 하나씩 만들어본 소스코드를 업로드해두는
                공간입니다 <br />
                기술을 뽐내기보다는 성장의 기록이자 작업물 관리를 할수있는
                공간이라고 생각합니다<br />
                다소 부족하더라도 이것저것 많이 시도해보려 노력합니다<br />
                repository에 이것저것 많으나 딱히 그럴싸한게 없네요 ;;
            </p>
            <ul>
                <li>
                    <h3><i class="fab fa-vuejs"></i> COVID-19 Dashboard</h3>
                    <p>
                        vue.js 활용 vuex 상태관리 axios 데이터 fetch를 활용해서
                        작업중입니다.
                    </p>
                    <p>
                        - 공개된 api가 흔하지않아 구하는데 어려움은 있었습니다.
                        <br />
                        - CORS 이슈가 가장 컸으며 vue.config.js 파일에 proxy
                        설정으로 로컬에선 데이터 받아서 뿌리는것까지
                        성공했습니다 <br />
                        - repository에 마크다운으로 설명글 달아뒀지만 서버쪽에서
                        cors 설정을 해줘야할것으로 보입니다 <br />
                        - 배포까지가 목표였는데 조금은 아쉬운 작업이었습니다
                        <br />
                        - env 환경파일을 써보는것도 좋은경험이었고 cors 이슈에
                        관해선 좀더 공부와 실무경험이 필요해보입니다
                        <br />
                    </p>
                    <div class="url">
                        <a
                            href="https://github.com/shs3832/covid-dashboard"
                            target="_blank"
                            >https://github.com/shs3832/covid-dashboard</a
                        >
                    </div>
                </li>

                <li>
                    <h3><i class="fab fa-js"></i> ScrollSection</h3>
                    <p>
                        가장 흔하게쓰이는 scroll 영역 캐치를 만들어봤습니다
                    </p>
                    <p>
                        - intersectionObserver를 활용할수도있으나 ie(..) 지원을
                        위해 polyfill을 써야하는 제약이있습니다
                        <br />
                        - 알려지지않은 webAPI 보다는 좀더 접근하기쉬운
                        javascript로만 구성해봤습니다
                        <br />
                        - 영역감지시 퍼포먼스 향상을위해 setTimeout으로
                        debounce를 주었습니다
                    </p>
                    <div class="url">
                        <a
                            href="https://github.com/shs3832/scrollSection"
                            target="_blank"
                            >https://github.com/shs3832/scrollSection</a
                        >
                    </div>
                </li>

                <li>
                    <h3><i class="fab fa-js"></i> ScrollCatch</h3>
                    <p>
                        sticky navigation에 활용할수있는 스크립트입니다
                    </p>
                    <p>
                        - 흔히쓰이는 scroll시 해당영역을 활성화시키는
                        navigation입니다
                        <br />
                        - jQuery없이 easing 및 animation 구현이 생각보다 시간이
                        많이걸렸었습니다 <br />
                        - 편하게 쓰다가 순수 javascript로만 구현해보니 손이
                        생각보다 많이가는 작업이었습니다 <br />
                        - ie11을 지원하기위해 polyfill 작업까지 해보았고
                        obfuscation으로 난독화를 진행해봤습니다 <br />
                    </p>
                    <div class="url">
                        <a
                            href="https://github.com/shs3832/scrollCatch"
                            target="_blank"
                            >https://github.com/shs3832/scrollCatch</a
                        >
                    </div>
                </li>

                <li>
                    <h3><i class="fab fa-gulp"></i> Gulp taskrunner</h3>
                    <p>
                        사실상 거의(?) 안쓰이는 gulp taskrunner입니다
                    </p>
                    <p>
                        - 팀장 재직시 cmd 활용 및 npm 에 적응시키기위해
                        만들었었습니다
                        <br />
                        - 4.0을 기준으로 작업했으나 예제가 생각보다 부족해
                        만드는데 몹시 애를 먹었습니다 <br />
                        - 조금더 고도화하면 어찌 쓸수도있겠으나 webpack이 주류가
                        된 이상 굳이 더 develop은 안해도될거같습니다 <br />
                        - 프로젝트에 활용하며 팀원들에게 npm 활용 및 taskrunner
                        커맨드 확인법 package.json 에 기록된 dependency를
                        알려줄수있었습니다
                    </p>
                    <div class="url">
                        <a
                            href="https://github.com/shs3832/gulp_env"
                            target="_blank"
                            >https://github.com/shs3832/gulp_env</a
                        >
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.playground {
    padding: 53px 40px 0;
    min-height: 100vh;
    .playground_wrap {
        max-width: 1200px;
        margin: 0 auto;
        padding: 100px 0;
        line-height: 1.5;
        h2 {
            font-size: 40px;
            font-weight: 500;
            color: #140c18;
            margin-bottom: 80px;
            @media screen and (max-width: 768px) {
                margin-bottom: 40px;
                font-size: 30px;
            }
        }
        i {
            margin-right: 10px;
            color: #1b242f;
        }
        ul {
            li {
                margin-top: 50px;
                h3 {
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    @media screen and (max-width: 768px) {
                        margin-bottom: 18px;
                        font-size: 24px;
                    }
                }
                .url {
                    margin-top: 20px;
                    padding: 20px;
                    background: #2b2b2b;
                    border-radius: 10px;
                    a {
                        color: #cfcfcf;
                        text-decoration: none;
                        word-break: break-all;
                    }
                }
                p {
                    line-height: 1.5;
                    @media screen and (max-width: 768px) {
                        font-size: 14px;
                        line-height: 1.7;
                    }
                }
            }
        }
        .fa-vuejs {
            color: #42b983;
        }

        .fa-js {
            color: #f0db4f;
        }
        .fa-gulp {
            color: #db4446;
        }
    }
}
</style>
