//获取当前样式的函数
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
}

//运动框架的函数
function animate(obj,json,fn){
    clearInterval(obj.timer);
    obj.timer= setInterval(function(){
        var flag =true; //用来判断是否清楚定时器 ，一定要写在json 遍历的位外面
        for(var k in json){
            var current= 0; //存贮当前的属性的值
            if(k=="opacity"){
                current = parseInt(getStyle(obj,k)*100) || 0; //透明度的属性的值
            }
            else{
                current = parseInt(getStyle(obj,k)); //当前的样式
            }

            var step = (json[k]- current)/10;//步长=目标样式值-当前的样式值
            step = step >0 ? Math.ceil(step):Math.floor(step);
            //判断透明度
            if(k== "opacity"){
                if("opacity" in obj.style){
                    obj.style.opacity= (current+step)/100;
                }
                else{
                    obj.style.filter= "alpha(opacity="+(current+step)+")";
                }
            }
            //判断是否包含z-index属性
            else if(k=="zIndex"){
                obj.style.zIndex=json[k];
            }

            else{
                obj.style[k]= current + step + "px";
            }


            //console.log(current);
            if(current!=json[k]){  //判断当前属性是否与目标属性全部相等，如果不等，flag= flase ,不清除定时器
                flag=false;
            }

        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();//函数名+括号，调用函数
            }
        }

    },30)
}/**
 * Created by Designer on 2017/7/27.
 */
