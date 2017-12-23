# Javascript
## 2.1 基础API提升
### 2.1.1 新选择器
1.
document.querySelector(selector);
选择第一个满足条件的元素（返回的是一个DOM对象）
2.document.querySelectorAll(selector);
这种方式是返回满足该条件的所有元素（返回的是一个DOM对象的一个数组）
3.$(".item")
返回一个Jquery对象（dom元素的数组）

本质上jquery方式和qs方式都是获取dom数组，只不过jquery会多一些其他的API
DOM数组的每个成员注册事件不能像Jquery一样直接注册，必须分别给每个元素
h5就是将我们经常需要的操作又包装了一层

### 2.1.2
1.新H5中DOM对象 对了一个classList属性，是一个数组


add 添加一个新的类名
remove 删除一个类名
contains 判断是否包含一个指定的类名
toggle 切换一个class    element.toggle("class-name",[add_or_romove])
toggle函数的第二个参数true为添加  false为删除


### 2.1.3 访问历史API



