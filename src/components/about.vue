<template>
    <section class="contents">
        <div>
            <strong>About</strong>
            <div class="contents_block">
                <h2>누구나 쉽게 사용할수 있어야 하며 알아보기 쉬워야한다</h2>
                <p>
                    마크업 및 스크립트 작업시 항상 추구하는 목표입니다. 프로젝트
                    규모가 커지고 복잡해지면 완전히 쉬울순 없겠지만 될수있는대로
                    리팩토링과 공통요소를 분리해 반복되는 작업은 하나로
                    줄이기위해 노력합니다
                </p>
                <p>
                    웹은 누구나 사용가능하며 불편함이 있어선 안된다고 생각하기에
                    UI/UX적인 부분에서도 디자이너, 기획자에게 제 생각을 건의
                    하는편이며 직급이나 연차가 낮더라도 다른분들의 코드를봤을때
                    제가 한것보다 나은점이 있다면 적극 수용해나가며 지금까지
                    일해왔습니다
                </p>
                <p>
                    발전속도가 빠른 퍼블리싱 / 프론트개발이기에 집에서는 인강을
                    통해 스터디를 하고있습니다. 배울땐 어렵지만 실무에
                    적용할때는 보람을 느낍니다 이렇게 다른분들과 함께 만들어가는
                    웹 프로젝트를 하는것이 재미있어 지금까지 오게되었습니다.
                </p>
            </div>
        </div>

        <div>
            <strong>Technical</strong>
            <div class="contents_block">
                <h2>
                    <i class="fab fa-html5"></i> HTML, SCSS, 웹표준, 웹접근성
                </h2>
                <p>
                    마크업시 웹표준 및 접근성 작업을 준수하려고 노력합니다
                    <br />
                    스타일시트는 CSS pre-processor 활용을 통해 효율적으로
                    작업하는것을 선호합니다. <br />
                    크로스브라우징은 요구에따라 다르지만 ie11 부터 브라우저의
                    최신버전을 지원할수있도록 마크업을 합니다
                </p>

                <h2>
                    <i class="fab fa-js"></i> Javascript, jQuery, Vue.js, Gulp,
                    Grunt
                </h2>
                <p>
                    스크립트는 es6+의 문법을 따르려고 합니다 간결하고 편해져서
                    생산성이 많이 올라갔다고 생각합니다 <br />
                </p>
                <p>
                    jQuery는 어떻게보면 구식의 기술이지만 무조건 나쁘다고
                    생각하지는 않습니다 필요한곳에 적재적소로 쓸수있다면 그것은
                    그것 나름대로 도움이 된다고 생각합니다 Vue.js 는
                    프론트개발자와의 협업을 위해 스터디중입니다. 최소한 코드는
                    읽을줄 알아야 대화가 된다고 생각하며 근래의 퍼블리셔라면
                    어느정도 디버깅도 할수있어야 한다고 봅니다.
                </p>
                <p>
                    Gulp, Grunt 를 활용해 프로젝트를 진행해본 경험이 있습니다
                </p>
                <p>
                    Gulp의 경우 팀장으로 재직시 npm 및 터미널 그리고 taskrunner
                    활용을 교육하기위해 간단하게 제작해 프로젝트에 활용한적이
                    있습니다.
                </p>
                <p>
                    본 사이트 역시 Vue로 제작되었으며 퍼블리셔로 경쟁력을
                    갖추기위해 계속 스터디중입니다.
                </p>

                <h2><i class="fab fa-git-square"></i> SVN, GIT</h2>
                <p>
                    이전회사에서는 늘 SVN을 사용하여 버전관리를 진행해왔고 GIT은
                    근래들어 소스트리로 관리하는법을 배워 사용중입니다
                </p>
                <p>
                    두가지다 버전을 관리한다는 점에서 같지만 디테일한 부분은
                    GIT이 더욱 좋다고 생각해 GIT만 사용중입니다.
                </p>
            </div>
        </div>

        <div>
            <strong>More Details</strong>
            <div class="contents_block">
                <p>
                    웹이라는건 함께 만들어가는것이라 생각합니다 안된다고
                    하기보다는 다른 방법을 찾아 보려고 노력하는편입니다.
                </p>
                <p>
                    프로젝트 종료시 코드리뷰를 통해 다음번엔 좀더 나은 코드를
                    작성할수있도록 스스로 스터디를 많이 하는편입니다
                </p>
                <p>
                    문제는 덮어놓기보단 오픈해서 함께 해결하는것을 선호합니다.
                    의외로 좋은 방법들이 많이 나오기도하며 혼자 앓는거보단 빨리
                    처리할수있어 생산성이 올라가기 때문입니다
                </p>

                <p>
                    연차가 많다고해서 모든걸 다 안다고 생각하진 않습니다.
                    8년차지만 아직 모자란것이 많고 배울것이 많다고 생각합니다.
                    프로젝트 진행시 이런점을 활용해서 혼자하는것이 아닌 협업의
                    자세로 임하려 하고있습니다
                </p>

                <p>
                    긴글 읽어주셔서 감사합니다
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.contents {
    position: relative;

    > div {
        padding: 0 40px;
        &:last-child {
            padding-bottom: 150px;
        }
        &:nth-child(even) {
            background: #f5f5f5;
        }
    }
}
.contents_block {
    padding-bottom: 100px;
    max-width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        padding-bottom: 50px;
    }
    i {
        margin-right: 10px;
        color: #1b242f;
    }
}
strong {
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    display: block;
    position: relative;
    padding-top: 100px;
    margin-bottom: 70px;
    @media screen and (max-width: 768px) {
        padding-top: 50px;
        font-size: 40px;
    }
    &:after {
        content: "";
        width: 50px;
        height: 3px;
        background: #444649;
        display: block;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 768px) {
            width: 30px;
        }
    }
}
h2 {
    font-size: 40px;
    font-weight: 500;
    color: #140c18;
    margin-bottom: 30px;
    line-height: 1.5;
    @media screen and (max-width: 768px) {
        font-size: 25px;
    }
}
p {
    color: #616161;
    font-size: 20px;
    line-height: 1.8;
    margin-bottom: 1em;
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
    + h2 {
        margin-top: 80px;
    }
}
</style>
