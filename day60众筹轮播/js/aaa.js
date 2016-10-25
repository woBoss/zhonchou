function get(selector){
		return document.querySelector(selector);
	}
function gets(selector){
		return document.querySelectorAll(selector);
	}
var arr = [1,2,3,4,5,6];
arr.forEach(function(jilou){
	$.ajax({
		type : "get",
		url : "http://www.ikindness.cn/api/test/getFund",
		data : {
			type : jilou
		},
		success : function(data){
				data.data.forEach(function(item,index){
					if(index == 0){
						$("<div></div>").addClass("yi_div yilou1").html("<h2>" + item.name + "</h2>"+"<a>已筹金额¥"
										+item.sum +"</a>"+"<div class='yi1_div'>查看项目 ＞</div>").css("backgroundImage","url("
										+item.image+")").appendTo($(".louceng" + jilou));
					}
					else{
						$("<div></div>").addClass("yilou2 yi_div").html('<div class="yi2_div"></div><div class="img"></div><a>'
										+item.name+'</a><div class="yi-lab"></div><div class="persent"><div class="per"></div></div><div class="rate">'
										+item.rate+'%<br/><span>达成率</span></div><div class="sum">'
										+item.sum+'<br/><span>已筹金额</span></div><div class="amount">'
										+item.amount+'<br/><span>支持人数</span></div>').appendTo($(".louceng"+jilou)).find(".img").css("backgroundImage","url("+item.image+")");
						item.label.forEach(function(item){
							$("<div></div>").addClass("label").text(item).appendTo($(".louceng"+ jilou + " .yilou2").eq(index-1).find(".yi-lab"));
						});
					}
					
				})
		}
	})
})