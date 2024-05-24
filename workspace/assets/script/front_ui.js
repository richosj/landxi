const ui = {};


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
