	function scroll(){
		if(window.pageYOffset!= null){
			return{
				left:window.pageXOffset,
				top:window.pageYOffset
			}
		}
		else if(document.compatMode = "CSS1Compat"){
			return{
				left:document.documentElement.scrollLeft,
				top:document.documentElement.scrollTop
			}
		}
		return{
			left:document.body.scrollLeft,
			top:document.body.scrollTop
		}

	}
	/*封装scroll结束*/

	/*封装document.getElementById()*/

	function $(id){
		return document.getElementById(id);
	}