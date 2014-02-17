chrome.browserAction.onClicked.addListener(function(){
	//注入jquery脚本
	chrome.tabs.executeScript(null,{file:'jquery-2.0.3.min.js'})
	//注入执行脚本
	chrome.tabs.executeScript(null,{file:'executeScript.js'})
})