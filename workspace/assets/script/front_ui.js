let ui = {};


ui.dropSelector = function(btn){
  var btn = $(btn);
  var obj = btn.closest('.cm-drop-select');
  var listWrap = obj.find('> div');
  var list = obj.find('> div > ul');

  if(!obj.hasClass('active')){
    toggleOpen();
    obj.addClass('active');

    //event add
    if(!obj.data('dropSelectorEvent')){
      obj.on('mouseleave', function(){
        ui.dropSelectorClose(obj);  
      });

      obj.data('dropSelectorEvent', true);
    }
  }else{
    ui.dropSelectorClose(obj);
  }

  function toggleOpen(){
    list.css({
      display: 'block',
      visibility: 'hidden',
    });
    list.css({
      visibility: '',
    });
  
    setTimeout(function(){
      obj.addClass('active-motion');
      listWrap.css({
        height: list.outerHeight(),
      })
    },5);
  }
}

ui.dropSelectorClose = function(obj){
  obj.removeClass('active');
  list = obj.find('>div>ul');
  listWrap = obj.find('>div');

  list.css({
    visibility: '',
  });

  listWrap.css({
    height: 0,
  });

  setTimeout(function(){
    obj.removeClass('active-motion');
    list.css({
      display: 'block',
      visibility: 'hidden',
    });
  },255);
}

// $('html').on('click', function(event){
//   if($(event.target).closest('.cm-drop-select').length < 1){
//     $('.cm-drop-select.active').each(function(){
//       ui.dropSelectorClose($(this));
//     });
//   }
// });

ui.qnaToggle = function(t,e){
  var btn = $(t)
  var item = btn.closest('.qna_item');
  var cont = item.find('.qna_item_text');

  item.siblings().removeClass('active').find('.qna_item_text').stop().slideUp();

  if(!item.hasClass('active')){
    item.addClass('active');
    cont.slideDown(300);
  }else{
    item.removeClass('active');
    cont.slideUp(300);
  }
}

jQuery(function(){
  // gnb
  var layoutGnb = function(){
    var header = $('.lay-header');
    var gnb = $('.lay-gnb > ul');
    // var depth1Link = gnb.find(' > li > a');
    var dim = $('.lay-header-dim');
    
    gnb.mouseenter(function(){
      dim.css('display','block');
      setTimeout(function(){
        header.addClass('gnb-open');
      },5);
    });

    gnb.mouseleave(function(){
      header.removeClass('gnb-open');
      setTimeout(function(){
        dim.css('display','none');
      },250);
    });

    gnb.find('> li').mouseenter(function(){
      $(this).addClass('active');
      $('.lay-header-bg strong').text( $(this).find('>a').text() );
    });

    gnb.find('> li').mouseleave(function(){
      $(this).removeClass('active');
    });
  }

  layoutGnb();
  
  var totalSearch = function(){
    var header = $('.lay-header');
    var btnOpen = $('.btn-search');
    var btnClose = $('.total-search_close');
    var searchWarp = $('.lay-total-search');
    var dim = $('.lay-header-dim');

    var closeFc;
    
    btnOpen.on('click', function(){
      console.log('%c열기','color:red');
      clearTimeout(closeFc);
      dim.css('display','block');
      header.addClass('search-open');
      searchWarp.css({
        display: 'block',
      })

      setTimeout(function(){
        searchWarp.css({
          marginTop: 0,
        });
        $('[data-id=totalSearchIpt]').focus();
      },5);
    });

    btnClose.on('click', function(){
      header.removeClass('search-open');
      searchWarp.css({
        marginTop: '-300px',
      });

      closeFc = setTimeout(function(){
        dim.css('display','none');
        console.log(dim);
        console.log('%c닫기', "color:red");
        searchWarp.css({
          display: 'none',
        });
      },305);
    });
  }

  totalSearch();

  // 약관
  var memgerJoinAgg = function(){
    if(('.cont-agg').length < 1) return;
    var btn = $('.cont-agg .cont-agg-togglebtn');
    btn.on('click', function(){
      var pobj = $(this).closest('.cont-agg');
      if(!pobj.hasClass('active')){
        pobj.addClass('active');
      }else{
        pobj.removeClass('active');
      }
    });
  }

  memgerJoinAgg();


  var steimMap = function(){
    var btn = $('.btn-sitemap');
    var sitemap = $('.lay-sitemap');
    var btnClose = $('.lay-sitemap_close');

    // open
    btn.on('click',function(){
      sitemap.css('display','flex');
      $('html,body').css('overflow','hidden');
      setTimeout(function(){
        sitemap.addClass('active');
      },5);
    });

    // close
    btnClose.on('click', function(){
      sitemap.removeClass('active');
      $('html,body').css('overflow','');
      setTimeout(function(){
        sitemap.css('display','none');
      },255);
    });


    var map = $('.sitem-map-nav > ul');
    var bg = $('.selectbg');
    map.find('>li').on('mouseenter', function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      bg.css({
        opacity: 1,
        left: $(this).position().left,
        top:0,
        width: $(this).width(),
      });
    });

    map.on('mouseleave', function(){
      bg.css({
        opacity: 0,
        top: 100,
      });
      map.find('>li').removeClass('active');

      setTimeout(function(){
        bg.css('top',0);
      },250);
    });

    var bg1 = $('.lay-sitemap_bg1');
    var bg2 = $('.lay-sitemap_bg2');
    $('.lay-sitemap').on('mousemove', function(event){
      var wW = $(window).width()/2;
      var wH = $(window).height()/2;
      bg1.css({
        backgroundPositionX: ((event.pageX - wW) / 100) + '%',
        backgroundPositionY: ((event.pageY - wH) / 100) + '%'
      });

      bg2.css({
        backgroundPositionX: (((event.pageX - wW)) / 50) + '%',
        backgroundPositionY: (((event.pageY - wH)) / 50) + '%'
      });

    });
  }
  steimMap();


  function randomInt(min, max){ 
    var randomNum = Math.floor(Math.random()*(max-min+1)) + min; 
    return randomNum;
  }

  setTimeout(() => {
    $('[class^=item-particle]').addClass('ani2');
    $('[class^=item-particle]').each(function(idx, elm){
      $(elm).css({
        'animation-duration': (randomInt(2,10) * 1000)+'ms',
        // 'animation-delay': randomInt(100,300)+'ms',
      });
    });
  }, 1000);

  $('*').on('focus', function(){
    //console.log($(this).text());
  });
});

$(function(){ 
  // tabNav
  var tabNav = function(elm){
      var tabNav = elm;
      var tabIds = [];

      var toggleAllHidden = function(){
          $(tabIds).each(function(){
              ui.toggle(this,'close');
          });
      }

      tabNav.find('button').each(function(){
          var btn = $(this);
          tabIds.push($(this).data('id'));

          btn.on('click', function(){
              tabNav.find(' > li').removeClass('active');
              btn.parent().addClass('active');
              toggleAllHidden();
              ui.toggle(btn.data('id'),'open');
          });
      });
  }
  uiSetTabNav = function(){
      if($('[data-js=tabNav]').length > 0){
          $('[data-js=tabNav]').each(function(){
              if(!$(this).hasClass('hastabnav')){
                  $(this).addClass('hastabnav');
                  tabNav($(this));
              }
          });
      }
  }
  
  uiSetTabNav();    
})
/**
* 토글
* @param {String} toggleID 토글될 element의 data-toggle-id
* @param {String} action open || close
*/
//ui = {}

ui.toggle = function(toggleID, action, btn, opt){
  // toggle-id
  var elm = $('[data-toggle-id=' + toggleID + ']');
  var btn = $(btn);
      if(action){
          if(action == 'open'){
              btn.addClass('active');
              elm.removeClass('toggle-hidden');
          }else if(action == 'close'){
              btn.removeClass('active');
              elm.addClass('toggle-hidden');
          }else{
      }
      }else{
      if(!elm.hasClass('toggle-hidden')){
          if(opt.ani) elm.stop().slideUp(250);
          btn.removeClass('active');
          elm.addClass('toggle-hidden');
      }else{
          if(opt.ani) elm.stop().slideDown(250);
          btn.addClass('active');
          elm.removeClass('toggle-hidden');
      }
  }
}


var uiModal = {};
// jQuery(function() {
  // modal open
  uiModal.layout = function(opt){
    console.log('%clayout', 'color: blue');
    var ct
    ct = {
      title: '알림',
      type: 'default',
      width: 500,
      xbtn: true,
    }

    if(opt.type && opt.type == 'alert'){
      ct = {
        title: '알림',
        type: 'default',
        width: 300,
        xbtn: 240,
      } 
    }

    $.extend(ct, opt);

    var temp = `
    <div class="popup-wrap" style="max-width: ${ct.width}px">
      <div class="popup-container">
        <!-- header -->
        <div class="popup-header">
          <span class="popup-header-text">${ct.title}</span>
          <button type="button" class="popup-header-cancle" data-modal="closebtn">모달 닫기</button>
        </div>
        <!-- content -->
        <div class="popup-content">
          <!-- popup-content-wrap -->
          <div class="popup-content-wrap">
            <div class="pop-inner-con">
              ${ct.content}
            </div>
            <!-- footer -->
            <div class="popup-footer"></div>
          </div>
          <!-- popup-content-wrap -->
        </div>
      </div>
    </div>
    `;
    
    var modal = $(temp);

    // 타입 설정
    if(ct.type) modal.addClass('modal-type-' + ct.type);

    // 클래스 추가
    if(ct.cssClass && ct.cssClass.length > 0){
      modal.addClass(ct.cssClass.join(' '));
    }
    
    // x 버튼
    if(!ct.xbtn) modal.find('.popup-header-cancle').remove();

    // 높이
    if(ct.height){
      modal.find('.popup-content-wrap').css({
        'height': ct.height,
        'max-height': 'none',
    });
    }
    
    var modalFooter = modal.find('.popup-footer');
    // 버튼
    var btnConfirm = $('<button class="confirm-btn btn btn_primary" data-modal="closebtn">확인</button>');
    var btnCancel = $('<button class="cancle-btn btn btn_default-outline" data-modal="closebtn">취소</button>');
    if(!ct.footerBtns){
      if(ct.cancel){
        if(ct.cancel.text) btnCancel.text(ct.cancel.text);
        if(!ct.cancel.close) btnCancel.removeAttr('data-modal');
        if(ct.cancel.done) btnCancel.on('click', function(){ ct.cancel.done() });

        modalFooter.append(btnCancel);
      }
      
      if(ct.confirm){
        if(ct.confirm.text) btnConfirm.text(ct.confirm.text);
        if(!ct.confirm.close) btnConfirm.removeAttr('data-modal');
        if(ct.confirm.done) btnConfirm.on('click', function(){ ct.confirm.done() });

        modalFooter.append(btnConfirm);
      }

      if(!ct.confirm && !ct.cancel){
        modalFooter.append(btnConfirm);
      }
    }else if(ct.footerBtns && ct.footerBtns.length > 0){
      $.each(ct.footerBtns, function(idx,elm){
        modalFooter.append(elm);
      });
    }

    if(ct.footerBtns === false){
      modalFooter.remove();
    }

    // 아이디
    if(ct.elm){
      console.log(modal);
      modal.attr('id',ct.elm);
    }

    return modal;
  }
  
  uiModal.getIndex = function(){
    var zIndex = 100000;
    $('.popup-wrap.modal-active').each(function(){
      if(zIndex < Number($(this).css('z-index'))){
        zIndex = Number($(this).css('z-index'));
      }
    });

    return zIndex+1;
  }
  
  uiModal.getElm = function(elmName) {
    return $('#' + elmName);
  }

  uiModal.open = function(opt, cbtn) {
    console.log('%cuiModal.open', 'background:blue;color:#fff');

    var modal;
    var cbtn = $(cbtn);

    if(opt.type != 'alert'){
      opt.width = !opt.width ? 1100 : opt.width;
    }
    // opt.height = !opt.height ? 560 : opt.height;
    
    if(uiModal.getElm(opt.elm).length > 0){
      modal = uiModal.getElm(opt.elm);
    }else{
      if(opt.content){
        modal = uiModal.layout(opt);
        $('body').append(modal);
      }
    }

    if(opt.callBack && opt.callBack.init){
      opt.callBack.init();
    }

    var pLeft;
    var pTop;

    opt.position = opt.position ? opt.position : 'center';

    console.log('%ccreate', 'color: red');
    if (typeof opt.position.target == 'object') {
      var clickBtn = $(opt.position.target);
      pLeft = Math.round(clickBtn.offset().left + clickBtn.outerWidth()) + 10;
      pTop = Math.round(clickBtn.offset().top);
      if (opt.position.left) {
        pLeft = Math.round(clickBtn.offset().left + clickBtn.outerWidth()) + opt.position.left;
      }
      if (opt.position.top) {
        pTop = Math.round(clickBtn.offset().top) + opt.position.top;
      }
    } else if (opt.position == 'center') {
      pLeft = 'calc(50% - ' + modal.outerWidth() / 2 + 'px)';
      pTop = Math.round($('html').scrollTop() + window.innerHeight/2 - modal.outerHeight() / 2);
      // pTop = 'calc(50% - ' + modal.outerHeight() / 2 +'px)';
    } else {
      pLeft = opt.position.left;
      pTop = opt.position.top;
    }

    modal.css({
      left: pLeft,
      top: pTop,
    });

    // zIndex 이벤트 추가
    modal.click(function(event){
      if(event.target.nodeName != 'BUTTON' && event.target.nodeName != 'A'){
        modal.css('z-index',uiModal.getIndex());
      }
      // if($('.newmodal').length > 0){
      //   $('.newmodal').css('z-index', uiModal.getIndex());
      //   $('.newmodal').removeClass('newmodal');
      // }
    });

    var bgBlock = $('<div data-modal="bg" style="background:rgba(0,0,0,.5);position:fixed;left:0;top:0;width:100%;height:100%;display:none;"></div>');

    // 닫기이벤트 추가
    modal.find('[data-modal=closebtn]').on('click', function(){
      uiModal.close(this, cbtn);
      bgBlock.fadeOut();
      $('html,body').css('overflow','');
    });

    // 모달 열기
    modal.addClass('modal-active');

    if(opt.callBack && opt.callBack.before){
      opt.callBack.before();
    }

    modal.css({
      display: 'block',
      zIndex: uiModal.getIndex(250),
    });
    modal.attr('tabindex', 0);
    modal.focus();

    if(opt.callBack && opt.callBack.after){
      opt.callBack.after();
    }

    if(opt.bgBlock){
      bgBlock.css('z-index', modal.css('z-index'));
      $('html,body').css('overflow','hidden');
      modal.before(bgBlock);
      bgBlock.fadeIn(250);
    }

    $('.popup-wrap').removeClass('newmodal');
    modal.addClass('newmodal');

    // 드래그설정
    if (typeof opt.drag == 'undefined' || opt.drag == true) {
      modal.draggable({
        handle: '.popup-header',
      });
      modal.find('.popup-header').css('cursor', 'move');
    } else {
      modal.find('.popup-header').css('cursor', 'default');
    }

    // XXX 테스트용
    modal.find('input[type=text], select').each(function(){
      if(!$(this).attr('title')){
        $(this).css('border', '1px solid red');
      }
    });

  $('*').on('focus', function(){
    console.log('a');
    console.log('%c'+$(this).text(),'color:#000');
  });
  }

  // 모달닫기
  /**
   * @param {element} elm
   */
  uiModal.close = function(elm,cbtn) {
    var obj;
    if (typeof elm == 'object') {
      obj = $(elm).closest('.popup-wrap');
    } else {
      obj = uiModal.getElm(elm);
    }

    if(cbtn) cbtn.focus();

    if(!elm) obj = $('.modal-active');
    obj.css('display', 'none');
    obj.removeClass('modal-active');

    $('[data-modal="bg"]').fadeOut(250);
    $('html, body').css('overflow','');
  }

  uiModal.templete = function(type,text){
    console.log('%ctemplete', 'color: red');
    var templayout;

    var alertLayout = function(icon,text){
      var output =`<div class="modal-alert-templete">
        <i class="cs-icon-${icon}">오류</i>
        <div>${text}</div>
        </div>`;
      return output;
    }

    if(type == 'alertError') templayout = alertLayout('error', text);
    if(type == 'alertAlert') templayout = alertLayout('alert', text);
    if(type == 'alertWarning') templayout = alertLayout('warning', text);
    if(type == 'alertcSuccess') templayout = alertLayout('success', text);
    if(type == 'alertInfo') templayout = alertLayout('info', text);
    return templayout;
  }
// });

jQuery(function($){
	// var datepicker = $("#datepicker");
	if(!$.datepicker) return false;
	var datePicker;
	
	var dateInit = function(){
		$.datepicker.setDefaults({
			dateFormat: 'yy-mm-dd',
			prevText: '이전 달',
			nextText: '다음 달',
			monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
			dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			dayNamesMin: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			showMonthAfterYear: true,
			changeYear: false,
			yearSuffix: '년',
		});
	}

	var dateRange = function(){
		var dateRangSet = $('.cs-datepicker-set');
		dateRangSet.each(function(){
			var row = $(this);
			var from = row.find('.js__date-from');
			var to = row.find('.js__date-to');

			// from.datepicker("setDate",new Date());
			// to.datepicker("setDate","+ 1w");

			from.datepicker({
			}).on( "change", function() {
				// console.log('나 바꼈다');
				to.datepicker( "option", "minDate", getDateRang( this ) );
			});

			to.datepicker({
			}).on( "change", function() {
				from.datepicker( "option", "maxDate", getDateRang( this ) );
			});

		});
	}

	function getDateRang( element ) {
		var date;
		try {
			date = $.datepicker.parseDate( "yy-mm-dd", element.value );
		} catch( error ) {
			date = null;
		}

		return date;
	}

	

	var init = function(){
		//datepicker 한글설정
		dateInit();

		$('.js__datepicker').datepicker({
			changeMonth: false,
			changeYear: false,
		});

		$('.modal-calendar').on('click',function(){
		});
		
		dateRange();
	}

	init();

	$('.modal-datepicker_close, .modal-datepicker_wrap').click(function(){
			$('.modal-datepicker').hide();
	});
	
	$('.datepicker').click(function(e){
			e.stopPropagation();
	});

	//date
	getDate = function(date){
		if(!date) date = new Date();
		var y = date.getFullYear();
				m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
				d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

				return y + '-' + m + '-' + d;
	}
});


document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.lay-gnb-item');
  const contents = document.querySelectorAll('.gnb_bread_con');

  tabs.forEach(tab => {
      tab.addEventListener('mouseenter', function () {
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        tab.classList.add('active');
        const target = document.getElementById(tab.getAttribute('data-target'));
        target.classList.add('active');
      });

      tab.addEventListener('mouseleave', function () {
        tab.classList.remove('active');
        const target = document.getElementById(tab.getAttribute('data-target'));
        target.classList.remove('active');
      });
    });
});