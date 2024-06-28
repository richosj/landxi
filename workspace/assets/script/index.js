function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (Mobile()) {
  //var viewportMetaTag = document.querySelector('meta[name="viewport"]');
  viewportMetaTag.setAttribute("content", "width=1560");

  const ds = document.querySelector("#section1");

  ds.classList.add("mobile");
}

function cutOffText(element) {
  //console.log(element);
  let text = element.textContent.trim();
  element.textContent = ""; // Clear existing text

  //Iterate through each character of the original text

  setTimeout(function () {
    for (let i = 0; i < text.length; i++) {
      // Delay the addition of each character to create the effect
      setTimeout(function () {
        element.textContent += text[i];
      }, i * 50); // Adjust the delay (100ms in this example)
    }
  }, 400);
}

// const action_m = setTimeout(() => {
//   $(".slide02").find(".visual-slide").addClass("firAction");
//   const typoElement2 = document.querySelector(".temp2");
//   cutOffText(typoElement2);
// }, 100);

// Move the code block here
// const addClasses = () => {
//   const visual = document.querySelectorAll(".object");
//   visual.forEach(element => {
//     element.classList.add("object-action");
//   });
//   const visualbtn = document.querySelector(".visual-link");
//   const moving = document.querySelector(".moving");
//   visualbtn.classList.add("action");
//   moving.classList.add("action");
// };
// setTimeout(addClasses, 200);


//const typoElement = document.querySelector('.temp');

// const visualSwiper = new Swiper('.section-1 .swiper', {
//     direction: 'horizontal',
//     //autoHeight: true,
//     loop: true,
//     effect: 'slide',
//     speed: 1200,
//     autoplay: {
//         delay: 5000,
//     },
//     slidesPerView: 1,
//     spaceBetween: 0,
//     debugger: true,
//     mousewheel: false,
//     centeredSlides: false,
//     navigation: false,
//     pagination: false,
//     effect: "fade",
//     navigation: {
//         nextEl: ".section-1 .next",
//         prevEl: ".section-1 .prev",
//     },
//     on: {
//         init: function (index) {
//             setTimeout(() => {
//                 $('.slide01').find('.visual-slide').addClass('firAction')
//                 const typoElement = document.querySelector('.temp');
//                 cutOffText(typoElement)
//             }, 200)
//         },
//         slideChange: function (index) {
//             if (index.realIndex == 0) {
//                 $('.visual-control .line').removeClass('index-2')
//             } else {
//                 $('.visual-control .line').addClass('index-2')
//             }

//             if (index.realIndex == 1) {
//                 if ($('.slide02').find('.visual-slide').is('.firAction')) {

//                 } else {
//                     setTimeout(() => {
//                         $('.slide02').find('.visual-slide').addClass('firAction')
//                         const typoElement2 = document.querySelector('.temp2');
//                         cutOffText(typoElement2)
//                     }, 200)
//                 }
//             }

//         }
//     }
// })


const monitorDiv = document.querySelector(".monitor-container");
let s2Array; // s2Array를 if 블록 바깥에서 선언합니다.

if (monitorDiv.classList.contains("lx-monitor")) {
  s2Array = [
    {
      number: "01",
      link: "#",
      title: "불법쓰레기 탐지",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br>공간정보를 문장(텍스트)으로 보여줍니다.",
    },
    {
      number: "02",
      link: "#",
      title: "리싸이클링 자원 탐지",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br> 공간정보를 문장(텍스트)으로 보여줍니다.",
    },
    {
      number: "03",
      link: "#",
      title: "개발제한구역 불법행위 탐지",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br> 공간정보를 문장(텍스트)으로 보여줍니다.",
    },
    {
      number: "04",
      link: "#",
      title: "재난 피해 객체 탐지",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br> 공간정보를 문장(텍스트)으로 보여줍니다.",
    },
  ];
} else if (monitorDiv.classList.contains("namwon-monitor")) {
  s2Array = [
    {
      number: "01",
      link: "#",
      title: "불법 쓰레기 탐지",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br> 공간정보를 문장(텍스트)으로 보여줍니다.",
    },
    {
      number: "02",
      link: "#",
      title: "불법소각",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br> 공간정보를 문장(텍스트)으로 보여줍니다.",
    },
    {
      number: "03",
      link: "#",
      title: "방치폐가",
      text: "식별되는 객체들의 위치와 관계 분석을 통한<br>공간정보를 문장(텍스트)으로 보여줍니다.",
    },

  ];
}


const s2Swiper = new Swiper(".section-2 .swiper", {
  direction: "horizontal",
  effect: "slide",
  speed: 1000,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  debugger: true,
  allowTouchMove: false,
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
    init: function () {
      document.querySelector(".s2-tpl").classList.add("first-active");
    },
  },
  
});

s2Swiper.on("slideChange", function () {
  let html = `
    <div class="tit" style="--delay:0.25s">Land-XI 분석 서비스</div>
    <div class="link" style="--delay:0.55s"><a href="${
      s2Array[this.realIndex].link
    }">분석 서비스 바로가기<i>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" aria-hidden="true">
                    <image x="0px" y="0px" width="16px" height="16px" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfoBBAJNAVXy/7nAAAATElEQVQoz4XQSQ4AIAgEwYH//xkPboAMcjKplhjFsOYc4ig+I8bE+g3nnjYsLHBcBYHfIHEOHo5BwT4o+QaE909SnhsaBrTn/QbKwAAvBhEZ9MuJewAAAABJRU5ErkJggg=="></image>
                </svg>
            </i></a></div>
    <div class="s-tit"  style="--delay:0.85s"><span class="num">${
      s2Array[this.realIndex].number
    }</span><b>${s2Array[this.realIndex].title}</b></div>
    <div class="txt"  style="--delay:1.15s">${
      s2Array[this.realIndex].text
    }</div>`;

  document.querySelector(".s2-tpl").classList.remove("first-active");
  document.querySelector(".s2-tpl").innerHTML = html;

  document.querySelectorAll(".scroller").forEach(el => {
    el.style.left = '50%';
  })
  document.querySelectorAll(".original").forEach(el => {
    el.style.width = '50%';
  })

  let addTime = setTimeout(() => {
    document.querySelector(".s2-tpl").classList.add("first-active");
  }, 250);
});
// 초기 전역변수.
let stopPlay = false;

$(".monitor-button-pause").click(function(){
  $(this).siblings('.monitor-button-play').addClass('active');
  $(this).removeClass('active')
  stopPlay = true;
  s2Swiper.autoplay.stop();
  console.log('monitor stop')
});
$(".monitor-button-play").click(function(){
  $(this).siblings('.monitor-button-pause').addClass('active');
  $(this).removeClass('active')
  stopPlay = false;
  s2Swiper.autoplay.start();
  console.log('monitor play')
});

$("svg").attr("aria-hidden", true);



document.querySelectorAll('.bafore').forEach(slider => {
  const sliderHandle = slider.querySelector('.scroller');
  const sliderImageAfter = slider.querySelector('.original');
  const coordinatesElement = document.querySelector('.monitor-wrapper');

  let isDragging = false;
  let startX = 0;
  let lastX = 0;
  let isMouseDown = false;

  sliderHandle.addEventListener('mousedown', (e) => {
      isDragging = true;
      document.body.style.cursor = 'ew-resize';
      startX = e.clientX;
      s2Swiper.autoplay.pause();
      isMouseDown = true;
      lastX = e.clientX;
  });

  document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;

    isDragging = false;
    document.body.style.cursor = 'default';
    if(stopPlay === false){
      s2Swiper.autoplay.start();
      console.log('start');
    }
    isMouseDown = false;
    coordinatesElement.classList.remove('move-right', 'move-left');
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const sliderRect = slider.getBoundingClientRect();
    
    let offsetX = e.clientX - sliderRect.left;

    if (offsetX < 0) offsetX = 0;
    if (offsetX > sliderRect.width) offsetX = sliderRect.width;

    const offsetPercentage = (offsetX / sliderRect.width) * 100;
    sliderHandle.style.left = `${offsetPercentage}%`;
    sliderImageAfter.style.width = `${offsetPercentage}%`;

    const swiperActive = document.querySelector('.swiper-slide-active');
    if (swiperActive) {
      if (offsetPercentage > 50) {
        swiperActive.classList.add('half-left');
        swiperActive.classList.remove('half-right');
      } else {
        swiperActive.classList.remove('half-left');
        swiperActive.classList.add('half-right');
      }
    }
  });


  sliderHandle.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;

    const x = event.clientX;
    const y = event.clientY;

    // 좌우 이동 방향 감지
    if (x > lastX) {
        // 오른쪽으로 이동
        coordinatesElement.classList.add('move-right');
        coordinatesElement.classList.remove('move-left');
    } else if (x < lastX) {
        // 왼쪽으로 이동
        coordinatesElement.classList.add('move-left');
        coordinatesElement.classList.remove('move-right');
    }    

    // 마지막 X 좌표 업데이트
    lastX = x;
  });

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const target = mutation.target;
        if (target.classList.contains('swiper-slide-active')) {
          // 현재 활성 슬라이드를 제외한 모든 형제 슬라이드에서 half-left 및 half-right 클래스 제거
          document.querySelectorAll('.swiper-slide').forEach(slide => {
            if (slide !== target) {
              slide.classList.remove('half-left', 'half-right');
            }
          });
        }
      }
    });
  });

  // 모든 swiper-slide 요소에 대해 MutationObserver 설정
  document.querySelectorAll('.swiper-slide').forEach(slide => {
    observer.observe(slide, { attributes: true });
  });

});



document.querySelectorAll(".tabs button").forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.classList.contains("active")) {
      let target = document.querySelector(this.getAttribute("data-tabs"));
      this.classList.add("active");
      this.parentNode.querySelectorAll("button").forEach((sibling) => {
        if (sibling !== this) {
          sibling.classList.remove("active");
        }
      });
      target.classList.add("show");
      target.parentNode.querySelectorAll(".tabs-cont").forEach((sibling) => {
        if (sibling !== target) {
          sibling.classList.remove("show");
        }
      });
    }
  });
});





