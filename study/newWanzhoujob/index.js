/**
 * Created by Designer on 2017/8/31.
 */
    /*顶部条登录效果*/
var topbar_companylogin= document.getElementById("topbar_companylogin");
var topbar_companylogin_item= document.getElementById("topbar_companylogin_item");
topbar_companylogin_item.onmouseover= function(){
    topbar_companylogin.style.display="block";
    
}
topbar_companylogin_item.onmouseout= function(){
    topbar_companylogin.style.display="none";
}

/*搜索框前部选择效果*/
var cSelect= document.getElementById("c-select");
var cSelectList=document.getElementById("c-select-list");
var cSelect_i=  cSelect.getElementsByTagName("i")[0];
var cSelectList_item= cSelectList.getElementsByTagName("li");
var  cSelecttxt=cSelect.getElementsByTagName("span")[0];

cSelect.onclick= function(){

    if( cSelectList.style.display=="none"){
        cSelectList.style.display="block";
        cSelect_i.style.backgroundPosition="-15px -100px";
    }
    else{
        cSelectList.style.display="none";
        cSelect_i.style.backgroundPosition="0px -100px";
    }
}
for(var i=0;i<cSelectList_item.length;i++){

    cSelectList_item[i].onclick=function(){
        var cSelectTxt=this.innerHTML;
        cSelecttxt.innerHTML= cSelectTxt;
    }

}
/*搜索框input输入效果*/
var searchInputText= document.getElementById("search-input--text");
var searchSubmitMessage=document.getElementById("search-submit-message");
searchInputText.oninput=searchInputText.onproperthchange= function(){
    if(this.value == ""){
        searchSubmitMessage.style.display="block";
    }
    else{
        searchSubmitMessage.style.display="none";
    }

}