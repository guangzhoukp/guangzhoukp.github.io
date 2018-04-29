
var defaultTheme=1;

function changeTheme(selectedID) {

	themeID=selectedID;
  	var objLinkThemeGlobal=document.getElementById('linkThemeGlobal');
  	var objLinkThemeIndex=document.getElementById('linkThemeIndex');
  	var objLinkThemeArticle=document.getElementById('linkThemeArticle');
  	var objLinkThemeList=document.getElementById('linkThemeList');
  	var objLinkThemeMenu=document.getElementById('linkThemeMenu');
  	
  	if(objLinkThemeMenu!=null){
  		objLinkThemeMenu.href='./styles/theme' + themeID + '/front/jqueryslidemenu.css';
  	}
  	if(objLinkThemeGlobal!=null){
  		objLinkThemeGlobal.href='./styles/theme' + themeID + '/front/blue.css';
  	}
  	if(objLinkThemeIndex!=null){
  		objLinkThemeIndex.href='/css/style_' + themeID + '.css';
  	}
  	if(objLinkThemeArticle!=null){
  		objLinkThemeArticle.href='./styles/theme' + themeID + '/front/Article.css';
  	}
  	if(objLinkThemeList!=null){
  		objLinkThemeList.href='./styles/theme' + themeID + '/front/list.css';
  	}
  	
  	oldTheme=getThemeID();
  	document.getElementById('img_theme_'+oldTheme).src='/images/skin_'+oldTheme+'_0.gif';
  	document.getElementById('img_theme_'+themeID).src='/images/skin_'+themeID+'_1.gif';
  	delCookie('myHntTheme');
  	SetCookie('myHntTheme',themeID);
	//writeHeaderFlash();
	//writeBannerFlash();
}

function getThemeID(){
	var tid=getCookie('myHntTheme');
	if(tid==null || tid==''){
		tid=defaultTheme;
	}
	return tid;
}

function writeStylesheetLinks(_links){
	themeID = getThemeID();

	for (var i = 0; i < _links.length; i++) {
		var link = _links[i];
		switch (link)
		{
			case 'linkThemeGlobal':
				document.writeln("<link id='linkThemeGlobal' href='./styles/theme" + themeID + "/front/blue.css' type='text/css' rel='stylesheet' />");
				break;
			case 'linkThemeIndex':
				document.writeln("<link id='linkThemeIndex' href='/css/style_" + themeID + ".css' type='text/css' rel='stylesheet' />");
				break;
			case 'linkThemeArticle':
				document.writeln("<link id='linkThemeArticle' href='./styles/theme" + themeID + "/front/Article.css' type='text/css' rel='stylesheet' />");
				break;
			case 'linkThemeList':
				document.writeln("<link id='linkThemeList' href='./styles/theme" + themeID + "/front/list.css' type='text/css' rel='stylesheet' />");
				break;
			case 'linkThemeMenu':
				document.writeln("<link id='linkThemeMenu' href='./styles/theme" + themeID + "/front/jqueryslidemenu.css' type='text/css' rel='stylesheet' />");
				break;
		};
	}
}
function writeHeaderFlash(onload){
	themeID = getThemeID();
	var flash = '\
    <object id="HeaderFlashObject" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="1002px" height="145px">\
    <param name="allowScriptAccess" value="sameDomain"><param name="movie" value="../images/theme' + themeID + '/front/headbanner.swf"><param name="quality" value="high">\
    <param name="menu" value="false"><param name=wmode value="opaque">\
    <embed src="../images/theme' + themeID + '/front/headbanner.swf" wmode="opaque" menu="false" quality="high" width ="1002px" height="145px" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\
    </object>';
	if (onload) {
		document.write(flash);
	} else {
		jQuery("#headbanner").empty()
		if (jQuery.browser.msie && parseInt(jQuery.browser.version) > 7){
			return;
		}else{
			jQuery("#headbanner").html(flash);
		}	
	}
}

function writeBannerFlash(onload){
	themeID = getThemeID();
	var flash = '\
    <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="615px" height="90px">\
    <param name="allowScriptAccess" value="sameDomain"><param name="movie" value="../images/theme' + themeID + '/front/banner01.swf"><param name="quality" value="high">\
    <param name="menu" value="false"><param name=wmode value="opaque">\
    <embed src="../images/theme' + themeID + '/front/banner01.swf" wmode="opaque" menu="false" quality="high" width ="615px" height="90px" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\
    </object>';
	if (onload) {
		document.write(flash);
	} else {
		if (jQuery.browser.msie && parseInt(jQuery.browser.version) > 7)
			return;
		else
			jQuery("#dianxin-banner").empty().html(flash);
	}
}

//将主题的图片改为“选中”
window.onload = function(){
	var themeID=getThemeID();
	document.getElementById('img_theme_'+themeID).src='/images/skin_'+themeID+'_1.gif';
	


}
