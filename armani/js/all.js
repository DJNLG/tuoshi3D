

/**
* 为指定的图片生成刮刮卡图层
* @param imgId img标签ID
* @param condition 刮开比例 作为触发callback的条件 即 刮开百分之XX之后触发callback 默认为90%
* @param isOnce callback是否只调用1次 默认为否
*/

//function imgLoad(url, callback) {
//    var img = new Image();
//    img.src = url;
//    if (img.complete) {
//        callback.call(this,img.width, img.height);
//    } else {
//        img.onload = function () {
//            callback.call(this,img.width, img.height);
//            img.onload = null;
//        };
//    };
//};
//var pageSlider = new WxMoment.PageSlider({
//    pages: $('.screen')
//})


//屏幕自适应
$(document).ready(function(){


    // jQuery.noConflict();   
    // 放大元素,按照320x504定位,按比例scale
    function scaleEle(selector,position){
        var pageScale;
        var currentScale=screenWidth/screenHeight;
        var originScale=320/504;
        if(currentScale>originScale){
            pageScale=screenHeight/504;
        }else{
            pageScale=screenWidth/320;
        }
        $(selector).css({"-webkit-transform-origin":position,"transform-origin":position,"-webkit-transform":"scale("+pageScale+");","transform":"scale("+pageScale+");"});
    }

    var screenHeight = document.documentElement.clientHeight,
        screenWidth = document.documentElement.clientWidth;

    scaleEle(".screen__inner","center");
    $(".wrap").on("touchmove",function(e){
        e.preventDefault();
    });
var basePath = "http://7xooor.com1.z0.glb.clouddn.com/"
    //var images = document.querySelectorAll("img");
    var imageArray = [
        basePath+'screen1__bg_1.png',
        basePath+'screen2__bg_1.png',
        basePath+'screen2__finger_1.gif',
        basePath+'screen2__next_1.png',
        basePath+'screen2__txt1_1.png',
        basePath+'screen2__return_1.png',
        basePath+'screen2__share_1.png',
        basePath+'screen2__share2_1.png',
        basePath+'screen2__lvjing_1.png',
        basePath+'screen2__subover_1.png',
        basePath+'screen__bg1_1.png',
        basePath+'screen__bg2_1.png',
        basePath+'screen__bg3_1.png',
        basePath+'screen__choose_1.png',
        basePath+'screen__left_1.png',
        basePath+'screen__open_1.gif',
        basePath+'screen__photo_1.png',
        basePath+'screen__pic3_1.png',
        basePath+'screen__right_1.png',
        basePath+'screen__sub_1.png',
    ];
    var position=[];
    window.config={};
    //for(var i = 0; i < images.length; i++){
    //    imageArray.push(images[i].src);
    //};

    new preLoader(imageArray, {
        onProgress:function(a,b,c,d){
            var h=(((100/imageArray.length)*0.01*c)*100).toFixed(0);
            $('#percent').html(h);
        },
        onComplete: function(loaded, errors){

            setTimeout(function(){
                $('#loading').hide();
                $('.wrap').show();
                $('.screen2__pic1').addClass('pic1__show')},1500)
        }
    });
});

//music.js
//(function(b){function a(c){if(!c.music||c.music=="none"){return}var e=c.self,f=$("head"),g=$('<span class="u-audio"><audio src="'+c.music+'" loop="loop"></audio></span>');$audiostyle=$("<style>.u-audio{position:absolute;right:10px;top:10px;width:25px;height:25px;background:url(http://jn.21bit.cn/dev1/img/closes.png) no-repeat;background-size:25px; 25px;z-index:222;}.u-play{background:url(http://jn.21bit.cn/h5/dev/img/opens.png) no-repeat;background-size:25px; 25px;-webkit-animation:rotate 3.82s linear infinite;animation:rotate 3.82s linear infinite;}</style>");$.extend(e,{getaudio:function(){return g},audioplay:function(){g.find("audio")[0].play();g.addClass("u-play")},audiostop:function(){g.find("audio")[0].pause();g.removeClass("u-play")},getplaystats:function(){var h=g.find("audio")[0];return h.paused},autoplay:false});g.on("tap",function(){if(g.hasClass("u-play")){e.audiostop()}else{e.audioplay()}});e.append(g);f.append($audiostyle);e.audioplay();var d=function(){if(!e.autoplay){e.audioplay();e.autoplay=true}document.removeEventListener("touchstart",d,false)};setTimeout(function(){if(e.getplaystats()){e.audiostop();document.addEventListener("touchstart",d,true)}},3000)}$.music=function(d){var c;music={music:d||false,self:$("body")};if(music.self.data("music")){return}a(music);music.self.data("music",music.music);return $}})(window);

//屏幕自适应


(function() {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var canvas = document.getElementById("demoCanvas");
    var tempContext = canvas.getContext("2d");
    var colorMatrix = new createjs.ColorMatrix();
    colorMatrix.adjustSaturation(-100);
    colorMatrix.adjustContrast(40);
    var blackAndWhiteFilter = new createjs.ColorMatrixFilter(colorMatrix);
    //canvas.width = source.clientWidth;
    //canvas.height = source.clientHeight;
    //tempContext.drawImage(canvas, 0, 0, canvas.width, canvas.height);
    var o = true;
    var p = new createjs.Stage("demoCanvas");
    var l = new createjs.Bitmap("img/screen__bg1.png");
    // var l = new createjs.Bitmap("");
    var k = new createjs.Bitmap("img/screen__bg2.png");
    var h = new createjs.Bitmap("img/screen__bg3.png");
    //var f = new createjs.Bitmap("img/screen1__circle.jpg");
    l.regX = 0,
        l.regY =0 ,
        l.x = 0,
        l.y = 0,

    k.regX = 0,
        k.regY = 0,
        k.x = 0,
        k.y = 0,
    h.regX = 0,
        h.regY = 0,
        h.x = 0,
        h.y = 0;
    //f.regX = 0,
    //    f.regY = 0,
    //    f.x = 0,
    //    f.y = 0;

    p.update();
    createjs.Ticker.setFPS(5);
    createjs.Ticker.addEventListener("tick", m);
    function m(t) {
        p.update(t)
    };
    var j = 1,
        i = 90,
        n = document.getElementById("gesture-area");
    interact(n).gesturable({
        onstart: function(t) {},
        onmove: function(t) {
            if (typeof d == "undefined") {
                return
            }
            j = j * (1 + t.ds);
            i += t.da;
            x = (parseFloat(c.x) || 0) + t.dx,
                y = (parseFloat(c.y) || 0) + t.dy;
            c.x = x;
            c.y = y;
            c.s = j;
            c.a = i;
            d.scaleX = c.s,
                d.scaleY = c.s,
                d.rotation = c.a,
                d.x = c.x,
                d.y = c.y;
            p.update()
        },
        onend: function(t) {}
    }).draggable({
        onmove: g
    });
    function g(t) {
        if (typeof d == "undefined") {
            return
        }
        x = (parseFloat(c.x) || 0) + t.dx,
            y = (parseFloat(c.y) || 0) + t.dy;
        s = (parseFloat(c.s) || 1),
            a = (parseFloat(c.a) || 0);
        d.scaleX = c.s,
            d.scaleY = c.s,
            d.rotation = c.a,
            d.x = c.x,
            d.y = c.y;
        c.x = x;
        c.y = y;
        p.update()
    }
    var d;
    var u = new Image();

    var r = new FileReader(),
        e = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
    r.onload = function(t) {
        p.removeChild(d);
        d = new createjs.Bitmap(t.target.result);
        s = new createjs.Shape();
        s.graphics.beginFill("#ffffff").drawRect(0,0,canvas.width,canvas.height);
        u.src = t.target.result;
        //$('#source').attr('src', u.src);
        d.regX = Math.floor(u.width / 2) || 610,
            d.regY = Math.floor(u.height / 2) || 1200,
            d.x = 210,
            d.y = 400;
        d.scaleX = c.s,
            d.scaleY = c.s,
            d.rotation = c.a,
            d.x = c.x,
            d.y = c.y;
        p.addChild(s);
        p.addChild(d);

        p.swapChildren(l, d);
        p.swapChildren(k, d);
        p.swapChildren(h, d);
        //p.swapChildren(f, d);
        p.update();
    };

    $('.screen2__next2').on('touchend',function(){
        $("#gesture-area").hide();
        p.addChild(l);
        //$("#demoCanvas").css({"filter":"gray","filter":"grayscale(100%)"})
        $('.screen__left').show();
        $('.screen__right').show();
        $('.screen2__left2').show();
        $('.screen2__right2').show();
        $('.screen2__lvjing').show();
        $('.screen2__choose').hide();
        $('.screen2__return').hide()
        $(this).hide();
        $('.screen2__sub').show();
        $(this).hide();
    });
    $('.screen2__next').on('touchstart',function(){

            if(o){
                alert('请上传张照片呗');
                return
            }
                $('.screen2__choose').show();
                $('.screen2__return').show();
                $('.screen__photo').hide();
                $('.screen__photo2').hide();
            //$('.screen__photo2').hide();

                d.filters = [blackAndWhiteFilter];
                d.cache(0, 0, u.width, u.height);
                p.addChild(d);
                $(this).hide();
                //$('.screen2__sub').show();
                $('.screen2__next2').show();
                $('.screen2__txt1').hide();
            //canvas.width  = u.width;
            //canvas.height = u.height;
            //var context = canvas.getContext("2d");
            //context.drawImage(u, 0, 0);
            //var canvasData = context.getImageData(0, 0, canvas.width, canvas.height);
            //canvasData=black(canvasData);
            //context.putImageData(canvasData, 0, 0); // at coords 0,0
            //m = new createjs.Bitmap(canvas.toDataURL('jpg'));
            ////p.removeChild(d);
            ////
            //p.addChild(m);
            //p.update();
        //setOld();

            //d = d.clone();


    });
    $('.screen2__return').on('touchend',function(){
        //p.removeChild(d);
        $('.screen2__next2').hide();
        $('.screen2__next').show();
        $('.screen__photo').show();
        $('.screen__photo2').show();
        $(this).hide()
    })
    document.getElementById("inputimg").onchange = function() {
        var h=$(window).height();
        var w=$(window).width();
        o = false;
    //     alert('是否是Android：'+isAndroid);
    // alert('是否是iOS：'+isiOS);
        if (isiOS) {
                c = {
                x: w/2,
                y: h/3,
                s: 0.3,
                a: 90
            };
            j = 0.3,
            i = 90;
        }else{
                c = {
                x: w/2,
                y: h/3,
                s: 0.3,
                a: 1
            };
            j = 0.3,
            i = 1;
        }
        if (document.getElementById("inputimg").files.length === 0) {
            return
        }
        var t = document.getElementById("inputimg").files[0];
        if (!e.test(t.type)) {
            alert("You must select a valid image file!");
            return
        }
        $(".screen2__pic3").hide();
        r.readAsDataURL(t);
    };

    $('.screen2__right2').on('touchend',function(){
        if (p.contains(l)) {
            p.removeChild(l);
            p.addChild(k)
        } else {
            if (p.contains(k)) {
                p.removeChild(k);
                p.addChild(h)
            } else {
                p.removeChild(h);
                p.addChild(l)
            }
        }
        p.update()
    });
    $('.screen2__left2').on('touchend',function(){
        if (p.contains(h)) {
            p.removeChild(h);
            p.addChild(k)
        } else {
            if (p.contains(k)) {
                p.removeChild(k);
                p.addChild(l)
            } else {
                p.removeChild(l);
                p.addChild(h)
            }
        }
        p.update()
    });

    $("#upload").on("touchstart",function(e){
        e.stopPropagation();
        //var obj;
        //obj=document.getElementById("screen__copyuser");
        //obj.innerHTML=$(".username").val();
        //var con=obj.innerHTML;
        //console.log(con);
        //
        //if (document.getElementById("upload").innerHTML == '生成中..') {
        //    return
        //}
        document.getElementById("content2").style.display = "none";
        $("#show").show();
        $('.screen2__subover').show();
        $('.screen2__lvjing').hide();
        $('.screen__photo').hide();
        $('.screen__photo2').hide();
        $('.screen2__print').show();
        $('.screen2__share').show();
        $('.screen__left').hide();
        $('.screen__right').hide();
        $('.screen2__left2').hide();
        $('.screen2__right2').hide();
        $(this).hide();
        get_token();
        //b();
        // } else {
        //     document.getElementById("upload").innerHTML = "生成中..";
        // }

    });
    $('.screen2__share').on('touchend',function(){
        $('.screen2__link').show();
        $('.screen2__bg2').show();
    });
    $('.screen2__bg2').on('touchend',function(){
        $(this).hide();
        $('.screen2__link').hide();
    });

    //$(window).resize(function(){
    //    $("#content2").height(height);
    //});


    function b() {
        var t = document.getElementById("demoCanvas");
        var w = t.toDataURL("jpg");
        //var data=w.replace('data:image/jpeg;base64,','').replace('data:image/png;base64,','');
        var u = "http://api.21bit.cn/services/base64-file";
        var v = {
            content: w
        };
        //console.log(v);
        $.ajax({
            type: "POST",
            url: u,
            data: v,
            dataType: "json",
            success: function(json) {
                console.log(json.filename);
                var t = document.getElementById("demoCanvas");
                var u = t.toDataURL("jpg");
                document.getElementById("show").src = "http://api.21bit.cn/userdata/"+json.filename;
                document.getElementById("content2").style.display = "none";
                //document.getElementById("content3").style.display = "block";
                //if(json['flag']){
                //    clipCallBack(json);
                //    //window.alert('恭喜你,上传成功！');
                //}
            }
        })
    }
    //function q() {
    //    var t = navigator.userAgent;
    //    var v = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1;
    //    return v
    //}
    //获取token

    function get_token(){
        $.ajax({
            type: "GET",
            url: "http://api.21bit.cn/services/qiniu-token?bucket=jinbang",
            dataType: "json",
            success: function(json) {
                console.log(json.data.token)
                    var t = document.getElementById("demoCanvas");
                    var w = t.toDataURL("jpg");
                    var data=w.replace('data:image/jpeg;base64,','').replace('data:image/png;base64,','');
                    var pic=data;
                    var url = "http://upload.qiniu.com/putb64/-1";
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange=function(){
                        if (xhr.readyState==4){
                            var response = JSON.parse(xhr.responseText);
                            console.log(response)
                            document.getElementById("show").src = "http://7xooor.com1.z0.glb.clouddn.com/"+response.key;

                        }
                    }
                    xhr.open("POST", url, true);
                    xhr.setRequestHeader("Content-Type", "application/octet-stream");
                    xhr.setRequestHeader("Authorization", "UpToken "+json.data.token);
                    xhr.send(pic);

                //var t = document.getElementById("demoCanvas");
                //var u = t.toDataURL("jpg");
                //document.getElementById("show").src = "http://api.21bit.cn/userdata/"+json.filename;
                //document.getElementById("content2").style.display = "none";
                //document.getElementById("content3").style.display = "block";
                //if(json['flag']){
                //    clipCallBack(json);
                //    //window.alert('恭喜你,上传成功！');
                //}
            }
        })
    }

    // document.getElementById("close").onclick = function() {
    //     setTimeout(function() {
    //         document.getElementById("content1").style.display = "block";
    //         document.getElementById("content2").style.display = "none"
    //     },
    //     300)
    // };
    //function q() {
    //    var t = navigator.userAgent;
    //    var v = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1;
    //    return v
    //}
    //function init(){
    //    this.openId=this.getOpenId();
    //    console.log(this.openId)
    //}
    //init();
})();
function touchEvent(){
    $('.screen__open_zone').on('touchend',function(){

        $('.screen2__pic1').show();
        $('.screen1').hide();
        $('.screen2').show();
        $('.screen2__pic1').hide();
        //$('.screen2__pic3').show()
        $('.screen2__txt1').show();
        //$('.screen__photo').show()
        $('.screen2__next').show();
        setTimeout(function(){
            $('.screen__photo2').show()
        },1000)
    })
}
touchEvent();

//var host = window.location.host;


