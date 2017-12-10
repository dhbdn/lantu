
(function () {
    var $more = $('#header .top-nav .top-nav-small .more');
    $more.click(function () {
        $(this).find('.hidden').toggle();
    });
    var $li = $('#header .top-nav .top-nav-big li');
    $li.click(function () {
         $(this).addClass("active").siblings().removeClass("active");
    });
})();
/*==================banner====================*/
(function () {
    var $on = $('#banner .tab li'),
        $part = $('#banner .b-part .part'),
        $banner = $('#banner'),
        length = $on.length,
        timer = null,
        index = 0;
    //初始化样式
    $on.eq(0).addClass('on');
    $part.eq(0).show();
    $on.click(function () {
        var i = $(this).index();
        if (i!==index){
            change(function () {
                index = $(this).index();
                index = i;
            });
        }
    });
    function change(fn) {
        $part.eq(index).fadeOut(500);
        $on.eq(index).removeClass('on');
        fn&&fn();
        $part.eq(index).fadeIn(500);
        $on.eq(index).addClass('on');

    }
    $banner.hover(function () {
        clearInterval(timer);
    },auto);
    auto();
    function auto() {
        timer = setInterval(function () {
            change(function () {
                index++;
                index%=length;
            })
        },2000)
    }
})();

/*=================classic=======================*/
(function () {
    var $ul = $('#classic .c-main ul'),
        $li = $ul.children(),
        $btn = $('#classic .btn div'),
        length = $li.length,
        width = $ul.children().eq(0).width(),
        sumWidth = 0,
        clickTime = 0,
        timer = null,
        mid = Math.floor(length/2);
    change();
    //延迟300ms归位
    setTimeout(function () {
        sumWidth = 0;
        $li.each(function () {
            sumWidth +=$(this).width();
        });
        $ul.css('marginLeft',-sumWidth/2+'px').css('opacity',1);
    },300);
    //窗口大小改变
    $(window).resize(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            width = $ul.children().eq(0).width();
            sumWidth = 0;
            $li.each(function () {
                sumWidth +=$(this).width();
            });
            $ul.animate({'marginLeft':-sumWidth/2+'px'},300)
        },300)
    });
    //左右切换
    $btn.click(function () {
        if (new Date()-clickTime > 300){
            if ($(this).index()){
                mid++;
                mid%=length;
                $ul.stop().animate({
                    'marginLeft':-sumWidth/2 -width +'px'
                },300,function () {
                    $(this).css('marginLeft',-sumWidth/2+'px').append($(this).children().first());
                });
            }else{
                mid--;
                if (mid<0)mid = length-1;
                $ul.stop().animate({
                    'marginLeft':-sumWidth/2 +width +'px'
                },300,function () {
                    $(this).css('marginLeft',-sumWidth/2+'px').prepend($(this).children().last());
                });
            }
            change();
            clickTime = new Date();
        }
    });
    function change() {
        var a = mid,
            b = mid+1,
            c = mid-1;
        if (b>=length)b = 0;
        if (c<0)c = length-1;
        $li.removeClass('mid side');
        $li.eq(a).addClass('mid');
        $li.eq(b).addClass('side');
        $li.eq(c).addClass('side');
    }
})();


/*============================campus======================================*/
    var $campusmain = $('#campus-main'),
        $part1 = $('#campus-main .c-m-part1');

    $(window).resize(part1H);
    part1H();
    function part1H() {
        var winH = $(window).height();
        $part1.height(winH - parseFloat($campusmain.css('padding')));
    };
    //btn
(function(){
    var $btn = $campusmain.find(".part .btn"),
        time = null,
       index = 0;
    $btn.click(function () {
        index = $(this).index("#campus-main .part .btn");
        console.log(index);
        $("body,html").animate({
            scrollTop:(index+1)*1000
        },300)
    })
})();

(function () {
    var $item = $('#campus-main .c-m-part5 .wrap .left .left-item ul li'),
        $li = $('#campus-main .c-m-part5 .wrap .left .left-pic ul li'),
        $wrap = $('#campus-main .c-m-part5 .wrap'),
        length = $li.length;
        index = 0,
        timer = null;
    $item.eq(0).addClass('big');
    $li.eq(0).show();
    $item.click(function () {
       var i = $(this).index();
       if (i!== index){
           change(function () {
               index = $(this).index();
               index = i;
           })
       }
   })
    function change(fn) {
        $item.eq(index).removeClass('big');
        $li.eq(index).fadeOut(500);
        fn&fn();
        $item.eq(index).addClass('big');
        $li.eq(index).fadeIn(500);
    }
    $wrap.hover(function () {
        clearInterval(timer);
    })
    auto();
    function auto() {
        timer = setInterval(function () {
            change(function () {
                index++;
                index%=length;
            })
        },2000)
    }
})()
