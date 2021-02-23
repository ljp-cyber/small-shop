// JavaScript Document

function getMousePos4(event) {
	var e = event || window.event;
	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	var x = e.pageX || e.clientX + scrollX;
	var y = e.pageY || e.clientY + scrollY;
	//alert('x: ' + x + '\ny: ' + y);
	return { 'x': x, 'y': y };
	//var e = event || window.event;
	//return {'x':e.offsetX,'y':e.offsetY}
}
function bbxx_qhTU(e){
	console.log(e);
	var bbxx_src=e.getElementsByTagName("img").item(0).src;
	console.log(bbxx_src);
	var fangda=document.getElementById("bbxx_left_img_fangda");
	var img=document.getElementById("bbxx_left_img_img");
	img.src=bbxx_src;
	console.log(img.src);
	fangda.style.backgroundImage="url("+bbxx_src+")";
	}

function move(ev){
	ev = ev || window.event;
	var mousePos = getMousePos4(ev);
	var xuankuang=document.getElementById("bbxx_left_img_xuankuang");
	var img=document.getElementById("bbxx_left_img_xt");
	var ljh=document.getElementById("bbxx_left_img_img");
	var fangda=document.getElementById("bbxx_left_img_fangda");
	
	/*var li1=document.getElementById("li1");
	var li2=document.getElementById("li2");
	var li3=document.getElementById("li3");
	var li4=document.getElementById("li4");
	var li5=document.getElementById("li5");*/
	
	xuankuang.style.display="block";
	fangda.style.display="block";
	
	//var xuankuang_x=mousePos.x;
	//var xuankuang_y=mousePos.y;
	
	//放大框的大小
	var fangda_w=fangda.offsetWidth;
	var fangda_h=fangda.offsetHeight;
	
	//小图的宽高
	var xiaotu_w=ljh.width;
	var xiaotu_h=ljh.height;
	
	//获取原图片的大小
	var rw;
	var rh;
	if (typeof ljh.naturalWidth == "undefined") {
　　// IE 6/7/8
　　var i = new Image();
　　i.src = ljh.src;
　　rw = i.width;
　　rh = i.height;
	}else {
　　// HTML5 browsers
　　rw = ljh.naturalWidth;
　　rh = ljh.naturalHeight;
	}
	if(rw/xiaotu_w<1.5||rh/xiaotu_h<1.5){
	    //console.log("小图大小"+xiaotu_w+","+xiaotu_h);
		//console.log("大图大小"+rw+","+rh);
		rw=rw*2;
		rh=rh*2;
		fangda.style.backgroundSize=rw+"px "+rh+"px";
		//console.log("大图强制放大大小"+rw+","+rh);
	}
	//选框的大小
	var xuankuang_w=xiaotu_w*fangda_w/rw;
	var xuankuang_h=xiaotu_h*fangda_h/rh;
	xuankuang.style.width=xuankuang_w+"px";
	xuankuang.style.height=xuankuang_h+"px";
	//alert(parseInt(xuankuang_h)+","+xuankuang_w)
	
	//选框的位置
	var xuankuang_y=mousePos.y-img.offsetTop-xuankuang_h/2;
	var xuankuang_x=mousePos.x-img.offsetLeft-xuankuang_w/2;
	if(xuankuang_x<0){xuankuang_x=0;}
	if(xuankuang_y<0){xuankuang_y=0;}
	if(xuankuang_x>xiaotu_w-xuankuang_w){
		xuankuang_x=xiaotu_w-xuankuang_w;
	}
	if(xuankuang_y>xiaotu_h-xuankuang_h){
		xuankuang_y=xiaotu_h-xuankuang_h;
	}
	xuankuang.style.top=xuankuang_y+"px";
	xuankuang.style.left=xuankuang_x+"px";
	
	//放大图的显示区域
	var bigimg_x=rw*xuankuang_x/xiaotu_w;
	var bigimg_y=rh*xuankuang_y/xiaotu_h;
	//console.log("bigimg_x:"+bigimg_x+","+"bigimg_y:"+bigimg_y);
	//fangda.style.backgroundImage="";
	fangda.style.backgroundPosition=(-bigimg_x)+"px "+(-bigimg_y)+"px";
	
	
	/*li1.innerHTML="鼠标x:"+mousePos.x+",鼠标y:"+mousePos.y;
	li2.innerHTML="原图w:"+rw+",原图h:"+rh;
	li3.innerHTML="大图x:"+parseInt(bigimg_x)+",大图y:"+parseInt(bigimg_y);
	li4.innerHTML="选框w:"+parseInt(xuankuang_w)+",选框h:"+parseInt(xuankuang_h);
	li5.innerHTML="选框x:"+parseInt(xuankuang_x)+",选框y:"+parseInt(xuankuang_y);*/
	
}
function jiesufangda(){
	var xuankuang=document.getElementById("bbxx_left_img_xuankuang");
	var fangda=document.getElementById("bbxx_left_img_fangda");
	xuankuang.style.display="none";
	fangda.style.display="none";
	}