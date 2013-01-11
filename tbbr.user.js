// ==UserScript==
// @name        taobao bulk rate
// @namespace   geogeo.github.com
// @description taobao bulk rate
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @include     http://rate.taobao.com/*
// @include     http://trade.taobao.com/trade/trade_success.htm/*
// @require     http://code.jquery.com/jquery-1.8.3.min.js
// @require     http://twitter.github.com/bootstrap/assets/js/bootstrap.js
// @resource    css https://raw.github.com/geogeo/TBBR/master/tbbr.css
// @version     1
// ==/UserScript==

var css = GM_getResourceText('css');
GM_addStyle(css);
$('<div></div>').html('<div class="modal  in" style="left:auto;right:3px;width:300px;opacity:0.95"> <div class="modal-header"> <h3 id="myModalLabel">批量评价</h3> </div> <div class="modal-body"> <form id="bulkrate">   <fieldset>     <textarea id="rate-msg" placeholder="Type something…"></textarea>     <span class="help-block"></span>     <label class="checkbox">       <input checked="true" type="checkbox"> 好评     </label>   </fieldset> </form> </div> <div class="modal-footer">  <a class="btn btn-primary" id="tbbr-submit">提交</a>     <a href="#settings" class="btn" data-toggle="modal">设置</a> </div> </div>    <div id="settings" class="modal hide fade" tabindex="-1" role="dialog"> <div class="modal-header"> <h3 id="myModalLabel">设置</h3> </div> <div class="modal-body"> <textarea id="default-msg" placeholder="默认评价"></textarea> </div> <div class="modal-footer"> <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button> <button id="save-default-msg" class="btn btn-primary" data-dismiss="modal" aria-hidden="true">保存</button> </div> </div> ').appendTo($('body'));
console.log('ok');
function updateComments(va){
$('.rate-msg').each(function(){
        $(this).val(va);
    });
}
$rateMsg = $('#rate-msg');
$defaultMsg = $("#default-msg");
if (msg = localStorage.getItem('defaultMsg')){
  console.log('get msg',msg);
  $rateMsg.val(msg);
    $rateMsg.change();
  $defaultMsg.val(msg);
}
$("#save-default-msg").click(function(){
  msg=$defaultMsg.val();
  localStorage.setItem('defaultMsg',msg);
  $rateMsg.val(msg);
    $rateMsg.change();
  console.log('msg saved',msg);
})

$("#tbbr-submit").click(function(){
    $(".submit.btn").click();
})



$rateMsg.bind("change keyup paste",function(){
    var value = $(this).val()
    updateComments(value);
})
