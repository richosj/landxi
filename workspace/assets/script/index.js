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

const s2Array = [
  {
    number: "01",
    link: "#",
    title: "불법쓰레기 탐지",
    text: "식별되는 객체들의 위치와 관계 분석을 통한<br>공간정보를 문장(텍스트)으로 보여줍니다.",
  },{
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
  document.querySelectorAll(".remodeling").forEach(el => {
    el.style.width = '50%';
  })

  let addTime = setTimeout(() => {
    document.querySelector(".s2-tpl").classList.add("first-active");
  }, 250);
});

$("svg").attr("aria-hidden", true);

document.querySelectorAll('.bafore').forEach(slider => {
  const sliderHandle = slider.querySelector('.scroller');
  const sliderImageAfter = slider.querySelector('.remodeling');

  let isDragging = false;
  let startX = 0;

  sliderHandle.addEventListener('mousedown', (e) => {
      isDragging = true;
      document.body.style.cursor = 'ew-resize';
      startX = e.clientX;
      s2Swiper.autoplay.pause();

  });

  document.addEventListener('mouseup', (e) => {
    if (!isDragging) return;

    isDragging = false;
    document.body.style.cursor = 'default';
    s2Swiper.autoplay.start()
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
