// JavaScript Document

//window.onload=bbpj_tz();
var bbpj_dh_L;
var bbpj_dh_T;
function bbpj_tz(){
	var bbpj_dh_ul_libbxx=document.getElementById("bbpj_dh_ul_libbxx");
	var bbpj_dh_ul_liljpl=document.getElementById("bbpj_dh_ul_liljpl");
	var bbpj_dh_ul_lizxfw=document.getElementById("bbpj_dh_ul_lizxfw");
	var bbpj_dh=document.getElementById("bbpj_dh");
	bbpj_dh_L=bbpj_dh.offsetLeft;
	bbpj_dh_T=bbpj_dh.offsetTop;
	document.onscroll=bbpj_dhYD;
	bbpj_dh_ul_libbxx.onclick=bbpj_tobbxx;
	bbpj_dh_ul_liljpl.onmousedown=bbpj_toljpl;
	bbpj_dh_ul_lizxfw.onmousedown=bbpj_tozxfw;
	}	
function bbpj_dhYD(e){
	var bbpj_dh=document.getElementById("bbpj_dh");
	bbpj_dh_L=bbpj_dh.offsetLeft;
	//bbpj_dh_T=bbpj_dh.offsetTop;
	console.log(bbpj_dh_T);
	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	var scrollY=document.documentElement.scrollTop || document.body.scrollTop;
	if(scrollY>bbpj_dh_T){
	    bbpj_dh.style.position="fixed";
		if(bbpj_dh_L-scrollX>=0){
			bbpj_dh.style.left=(bbpj_dh_L-scrollX)+"px";
		}
		else{
			bbpj_dh.style.left="0px";
		}
	}else{
		bbpj_dh.style.position="";
	}
}	
function bbpj_tobbxx(e){
	var bbpj_right_bbxx=document.getElementById("bbpj_right_bbxx");
	var bbpj_right_ljpl=document.getElementById("bbpj_right_ljpl");
	var bbpj_right_zxfw=document.getElementById("bbpj_right_zxfw");
	bbpj_right_bbxx.style.display="block";
	bbpj_right_ljpl.style.display="none";
	bbpj_right_zxfw.style.display="none";
	document.getElementById('bbpj_dh').scrollIntoView();
	var bbpj_dh_ul_libbxx=document.getElementById("bbpj_dh_ul_libbxx");
	var bbpj_dh_ul_liljpl=document.getElementById("bbpj_dh_ul_liljpl");
	var bbpj_dh_ul_lizxfw=document.getElementById("bbpj_dh_ul_lizxfw");
	bbpj_dh_ul_libbxx.style.borderBottom="none";
	bbpj_dh_ul_libbxx.style.borderTop="2px solid orange";
	bbpj_dh_ul_libbxx.style.backgroundColor="white";
	bbpj_dh_ul_liljpl.style.border="1px solid #E8E8E8";
	bbpj_dh_ul_liljpl.style.borderRight="none";
	bbpj_dh_ul_liljpl.style.backgroundColor="#F6F6F6";
	bbpj_dh_ul_lizxfw.style.border="1px solid #E8E8E8";
	bbpj_dh_ul_lizxfw.style.borderRight="none";
	bbpj_dh_ul_lizxfw.style.backgroundColor="#F6F6F6";
	}
function bbpj_toljpl(e){
	
	var bbpj_right_bbxx=document.getElementById("bbpj_right_bbxx");
	var bbpj_right_ljpl=document.getElementById("bbpj_right_ljpl");
	var bbpj_right_zxfw=document.getElementById("bbpj_right_zxfw");
	bbpj_right_bbxx.style.display="none";
	bbpj_right_ljpl.style.display="block";
	bbpj_right_zxfw.style.display="none";
	document.getElementById('bbpj_dh').scrollIntoView();
	var bbpj_dh_ul_libbxx=document.getElementById("bbpj_dh_ul_libbxx");
	var bbpj_dh_ul_liljpl=document.getElementById("bbpj_dh_ul_liljpl");
	var bbpj_dh_ul_lizxfw=document.getElementById("bbpj_dh_ul_lizxfw");

	bbpj_dh_ul_liljpl.style.borderBottom="none";
	bbpj_dh_ul_liljpl.style.borderTop="2px solid orange";
	bbpj_dh_ul_liljpl.style.backgroundColor="white";
	bbpj_dh_ul_libbxx.style.border="1px solid #E8E8E8";
	bbpj_dh_ul_libbxx.style.borderRight="none";
	bbpj_dh_ul_libbxx.style.backgroundColor="#F6F6F6";
	bbpj_dh_ul_lizxfw.style.border="1px solid #E8E8E8";
	bbpj_dh_ul_lizxfw.style.borderRight="none";
	bbpj_dh_ul_lizxfw.style.backgroundColor="#F6F6F6";
	}
function bbpj_tozxfw(e){
	
	var bbpj_right_bbxx=document.getElementById("bbpj_right_bbxx");
	var bbpj_right_ljpl=document.getElementById("bbpj_right_ljpl");
	var bbpj_right_zxfw=document.getElementById("bbpj_right_zxfw");
	bbpj_right_bbxx.style.display="none";
	bbpj_right_ljpl.style.display="none";
	bbpj_right_zxfw.style.display="block";
	document.getElementById('bbpj_dh').scrollIntoView();
	
	var bbpj_dh_ul_libbxx=document.getElementById("bbpj_dh_ul_libbxx");
	var bbpj_dh_ul_liljpl=document.getElementById("bbpj_dh_ul_liljpl");
	var bbpj_dh_ul_lizxfw=document.getElementById("bbpj_dh_ul_lizxfw");
	bbpj_dh_ul_lizxfw.style.borderBottom="none";
	bbpj_dh_ul_lizxfw.style.borderTop="2px solid orange";
	bbpj_dh_ul_lizxfw.style.backgroundColor="white";
	bbpj_dh_ul_libbxx.style.border="1px solid #E8E8E8";
	bbpj_dh_ul_libbxx.style.borderRight="none";
	bbpj_dh_ul_libbxx.style.backgroundColor="#F6F6F6";
	bbpj_dh_ul_liljpl.style.border="1px solid #E8E8E8";
	bbpj_dh_ul_liljpl.style.backgroundColor="#F6F6F6";
	bbpj_dh_ul_liljpl.style.borderRight="none";
	}