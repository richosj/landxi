jQuery(function($){
  
  function ConvertSystemSourcetoHtml(str){
		str = str.replace(/</g,"&lt;");
		str = str.replace(/>/g,"&gt;");
		str = str.replace(/\"/g,"&quot;");
    str = str.replace(/\'/g,"&#39;");
    // str += '\n';

    return str;
  }

  function codeGenerator(str){
    var lines = str.split("\n");
    var linesTotal = lines.length;
    var temp = '';

    var pattern = /\s/g;
    var tabsize = 0;
    for(var i = 0; i < lines[1].length; i++){
      if(!lines[1].substring(i,i+1).match(pattern)){
        tabsize = i;
        break;
      }
    }


    for(var i = 0; i < lines.length-1 ; i++){
      temp += ConvertSystemSourcetoHtml(lines[i]).substring(tabsize);
      if(i != 0) temp += '\n';
    }

    return temp;
  }
  
  $('pre>code').each(function(){
    //code highlight
    var $t = $(this).html();
    var tabsize = $(this).data('tabsize') ? $(this).data('tabsize') : 8;
		$(this).after('<pre><code class="html javascript hljs">'+codeGenerator($t,tabsize)+'</code></pre>');
		$(this).remove();
  });
  
  var classCopy = function(){
    $('.class').click(function(){
      console.log('ㅋㅋㅋㅋ 편의성 향상');
    });
  }

  var tabSection = function(){
    //init
    var tabSectionContainer = $('.build-tabsection');

    tabSectionContainer.each(function(){
      $(this).find('.js__tab button').eq(0).addClass('active');
      $(this).find('.tab-section').eq(0).show();
    });
    

  
    $('.build-tabsection').find('.js__tab button').click(function(e){
      e.preventDefault();

      var tabBox = $(this).closest('.build-tabsection');
      var idx = $(this).data('section') - 1;

      tabBox.find('.js__tab button').removeClass('active');
      $(this).addClass('active');

      tabBox.find('.tab-section').hide();
      tabBox.find('.tab-section').eq(idx).show();
    });
  }

  var init = function(){
    //클레스명 눌렀을경우 해당 클래스 이름 복사
    classCopy();
    tabSection();
  }

  init();



  var pageIndex = function(){
    var index = $('.build-nav > ul');
    var nav = '';
    $('.build-body > section').each(function(idx){
      var depth1 = $(this).find('.build-h2');
      var depth2 = $(this).find('.build-h3');
      $(this).attr('id','ct'+idx);
      nav += `<li><a href="#ct${idx}">${depth1.html()}`;
        if(depth2.length > 0){
          nav += '<ul>';
          depth2.each(function(idx2){
            $(this).attr('id','ctdep'+ idx +'_'+ idx2);
            nav += `<li><a href="#ctdep${idx}_${idx2}">${$(this).html()}`;
            // if($(this).text() == 'function'){
            //   $(this).closest('section').find('.guide-api').each(function(){
            //     console.log($(this).find('> p > strong').text());
            //   });
            // }
            nav += `</li>`;
          });
          nav += '</ul>';
        }
      nav += `</li>`;
      
      
    });
    index.html(nav);
  }

  pageIndex();
});