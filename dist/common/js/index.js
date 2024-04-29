function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (Mobile()) {
    var viewportMetaTag = document.querySelector('meta[name="viewport"]');
    viewportMetaTag.setAttribute('content', 'width=1560');

    const layBody = document.querySelector('.laybody');

    layBody.classList.add('mobile');
}


function cutOffText(element) {
    console.log(element);
    let text = element.textContent.trim();
    element.textContent = ''; // Clear existing text

    // Iterate through each character of the original text

    setTimeout(function () {
        for (let i = 0; i < text.length; i++) {
            // Delay the addition of each character to create the effect
            setTimeout(function () {
                element.textContent += text[i];
            }, i * 70); // Adjust the delay (100ms in this example)
        }
    }, 1400)
}


//const typoElement = document.querySelector('.temp');

const visualSwiper = new Swiper('.section-1 .swiper', {
    direction: 'horizontal',
    //autoHeight: true,
    loop: true,
    effect: 'slide',
    speed: 1200,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    debugger: true,
    mousewheel: false,
    centeredSlides: false,
    navigation: false,
    pagination: false,
    effect: "fade",
    navigation: {
        nextEl: ".section-1 .next",
        prevEl: ".section-1 .prev",
    },
    on: {
        init: function (index) {
            setTimeout(() => {
                $('.slide01').find('.visual-slide').addClass('firAction')
                const typoElement = document.querySelector('.temp');
                cutOffText(typoElement)
            }, 200)
        },
        slideChange: function (index) {
            if (index.realIndex == 0) {
                $('.visual-control .line').removeClass('index-2')
            } else {
                $('.visual-control .line').addClass('index-2')
            }

            if (index.realIndex == 1) {
                if ($('.slide02').find('.visual-slide').is('.firAction')) {

                } else {
                    setTimeout(() => {
                        $('.slide02').find('.visual-slide').addClass('firAction')
                        const typoElement2 = document.querySelector('.temp2');
                        cutOffText(typoElement2)
                    }, 200)
                }
            }

        }
    }
})

const s2Array = [{
    number: "02",
    link: "#",
    title: "컨텍스트 공간정보",
    text: "식별되는 객체들의 위치와 관계 분석을 통한<br>공간정보를 문장(텍스트)으로 보여줍니다."
}, {
    number: "06",
    link: "#",
    title: "해양 쓰레기 탐지",
    text: "항공영상 이미지를 활용하여<br>4가지 쓰레기(해안, 방파제, 육지, 해양)를<br>식별하여 탐지하고 보여 줍니다."
}];



const s2Swiper = new Swiper('.section-2 .swiper', {
    direction: 'horizontal',
    effect: 'slide',
    speed: 1000,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 0,
    debugger: true,
    mousewheel: false,
    loop: true,
    centeredSlides: false,
    navigation: false,
    pagination: false,
    navigation: {
        nextEl: ".section-2 .next",
        prevEl: ".section-2 .prev",
    },
    pagination: {
        el: ".section-2 .fraction",
        type: "fraction",
    },
    on: {
        init : function(){
            document.querySelector('.s2-tpl').classList.add('first-active');
        }
    }
})

s2Swiper.on('slideChange', function () {
    let html = `
    <div class="tit" style="--delay:0.25s">Land-XI 분석 서비스</div>
    <div class="link" style="--delay:0.55s"><a href="${s2Array[this.realIndex].link}">분석 서비스 바로가기<i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" aria-hidden="true">
                    <image x="0px" y="0px" width="16px" height="16px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfoBBAJNAVXy/7nAAAATElEQVQoz4XQSQ4AIAgEwYH//xkPboAMcjKplhjFsOYc4ig+I8bE+g3nnjYsLHBcBYHfIHEOHo5BwT4o+QaE909SnhsaBrTn/QbKwAAvBhEZ9MuJewAAAABJRU5ErkJggg=="></image>
                </svg>
            </i></a></div>
    <div class="s-tit"  style="--delay:0.85s"><span class="num">${s2Array[this.realIndex].number}</span><b>${s2Array[this.realIndex].title}</b></div>
    <div class="txt"  style="--delay:1.15s">${s2Array[this.realIndex].text}</div>`;
        
    document.querySelector('.s2-tpl').classList.remove('first-active');
    document.querySelector('.s2-tpl').innerHTML = html;
    console.log('cahnge');

    let addTime = setTimeout(() => {
        console.log('cahnge');
        document.querySelector('.s2-tpl').classList.add('first-active');
    },250)
})


$('svg').attr('aria-hidden', true);

document.querySelectorAll('.tabs button').forEach(button => {
    button.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            let target = document.querySelector(this.getAttribute('data-tabs'));
            this.classList.add('active');
            this.parentNode.querySelectorAll('button').forEach(sibling => {
                if (sibling !== this) {
                    sibling.classList.remove('active');
                }
            });
            target.classList.add('show');
            target.parentNode.querySelectorAll('.tabs-cont').forEach(sibling => {
                if (sibling !== target) {
                    sibling.classList.remove('show');
                }
            });
        }
    });
<<<<<<< HEAD
});

var OKS = {
    DUR: .8,
    EASE: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
};

if (false == true) {
    $('#fullpage').fullpage({
        licenseKey: 'FB75CBCF-678A49C4-88C3BA08-F5F9BEEA',
        paddingTop: '0',
        scrollingSpeed: OKS.DUR * 1300,
        easingcss3: OKS.EASE,
        css3: true,
        autoScrolling: true,
        onLeave: function (origin, destination, direction) {


            const currentText = document.querySelector('.index-nav .current');

            if (destination.index == 1) {
                s2Swiper.autoplay.start()
            } else {
                s2Swiper.autoplay.pause()
            }

            if (destination.index == 3) {
                noticeSwiper.autoplay.start()
            } else {
                noticeSwiper.autoplay.pause()
            }

            if (destination.index < 4) {
                currentText.textContent = "0" + (destination.index + 1);
            }

            const layHeader = document.querySelector('.lay-header');
            const indexNav = document.querySelector('.index-nav');

            if (destination.index > 2) {
                layHeader.classList.add('black');
                indexNav.classList.add('black');
            } else {
                layHeader.classList.remove('black');
                indexNav.classList.remove('black');
            }
        }
    });
}
=======
});
>>>>>>> 77bb15646945f7dfd7a28b2d5c65970de7b7fc92
