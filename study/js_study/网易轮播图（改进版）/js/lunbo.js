/**
 * Created by Designer on 2017/7/31.
 */
window.onload= function(){
    var w_slider= document.getElementById("w_slider");
    var sliderCtrl = w_slider.children[1];

    var sliderimgs=  w_slider.children[0].children;


    for(var i=0; i<sliderimgs.length;i++){
        var spans= document.createElement("span");
        spans.className="slider-ctrl-span";
        spans.innerHTML= sliderimgs.length-i;
        sliderCtrl.insertBefore(spans,sliderCtrl.children[1]);
    }
    sliderCtrl.children[1].className="slider-ctrl-span current";
    var sliderCtrlspans= sliderCtrl.children;
    var scrollWidth = w_slider.clientWidth;
    for(var i =1;i<sliderimgs.length;i++){
        sliderimgs[i].style.left = scrollWidth + "px";
    }

    var iNow = 0;//控制哪个图片做动画
    for(var k in sliderCtrlspans){
        sliderCtrlspans[k].onclick= function(){

            if(this.className=="slider-ctrl-prev"){  //点击左侧按钮
                animate(sliderimgs[iNow],{left:scrollWidth});
                iNow--;//先++
                if(iNow<0){ //后判断，再执行；
                    iNow=sliderimgs.length-1;
                }
                sliderimgs[iNow].style.left=-scrollWidth+"px";
                animate(sliderimgs[iNow],{left:0});
                squre();

            }
            else if(this.className=="slider-ctrl-next"){  //点击右侧按钮
                autoplay();
            }
            else{  //点击下面的按钮
                var that =this.innerHTML-1; //获取下面的索引号

                if(that>iNow){
                    animate(sliderimgs[iNow],{left:-scrollWidth});
                    sliderimgs[that].style.left=scrollWidth+"px";
                    animate(sliderimgs[that],{left:0});
                }
                else if(that<iNow){
                    animate(sliderimgs[iNow],{left:scrollWidth});
                    sliderimgs[that].style.left=-scrollWidth+"px";
                    animate(sliderimgs[that],{left:0});
                }

                iNow=that;
                animate(sliderimgs[that],{left:0});
                squre();

            }
        }
    }

    function squre(){  //控制下方span 的函数
        for(var i=1;i<sliderCtrlspans.length-1;i++){
            sliderCtrlspans[i].className="slider-ctrl-span";  //先将其他的设置为默认样式
        }
        sliderCtrlspans[iNow+1].className="slider-ctrl-span current"; //将当前的设置为当前样式；
    }

    var timer =null;
    timer=setInterval(autoplay,3000);  //定时器 自动播放
    function autoplay(){
        animate(sliderimgs[iNow],{left:-scrollWidth});


        iNow++;//先++
        if(iNow>sliderimgs.length-1){ //后判断
            iNow=0;
        }
        sliderimgs[iNow].style.left=scrollWidth+"px"; //再执行；
        animate(sliderimgs[iNow],{left:0});
        squre();
    }

    w_slider.onmouseover= function(){
        clearInterval(timer);
    }
    w_slider.onmouseout= function(){
        clearInterval(timer);
        timer=setInterval(autoplay,3000);
    }

}