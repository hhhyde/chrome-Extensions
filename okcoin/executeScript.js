$(function(){
	isBuyLTC=$('ul[class="selecttab-box1"] > li[class="cur"] > a[href="/buy.do?symbol=1"]').html()
	isSellLTC=$('ul[class="selecttab-box1"] > li[class="cur"] > a[href="/sell.do?symbol=1"]').html()
	if (isBuyLTC) {
		preFillBuyLTC()
	} else if (isSellLTC){
		preFillSellLTC()
	}
});
function preFillBuyLTC(){
	userBalance=Math.round($('#userBalance').val()*100)/100
	tradeCnyPrice=$('#tradeCnyPrice').val()
	tradeAmount=Math.round(userBalance/tradeCnyPrice*10000)/10000
	$('#tradeAmount').val(tradeAmount)
	$('#tradePwd').val(******)//trade-passwd
}
function preFillSellLTC(){
	amountLTC=$('div[class="moneynumtext1"]>span[class="moneynum fred"]').html()
	$('#tradeAmount').val(amountLTC)
	$('#tradePwd').val(******)//trade-passwd
}