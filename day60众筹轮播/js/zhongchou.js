function get(selector){
		return document.querySelector(selector);
	}
function gets(selector){
		return document.querySelectorAll(selector);
	}
// var arr = [1,2,3,4,5,6];
// arr.forEach(function(item){
// 	ajax(item);
// })
// function ajax(jilou){
// 	var xhr = new XMLHttpRequest();
// 	xhr.onreadystatechange = function(){
// 		console.log(["未打开请求","请求打开","请求发送成功","服务端成功接收请求","服务端响应成功"][xhr.readyState]);
// 		if(xhr.readyState === 4 && xhr.status === 200){
// 			var options = JSON.parse(xhr.responseText);
// 			console.log(options);
// 			options.data.forEach(function(item,index){
// 				if(index == 0){
// 					var con1 = document.createElement("div");
// 					con1.classList.add ("yi_div","yilou1") ;
// 					console.log(document.querySelector(".louceng" + jilou));
// 					con1.innerHTML = "<h2>" + item.name + "</h2>"+"<a>已筹金额¥"+item.sum +"</a>"+"<div class='yi1_div'>查看项目 ＞</div>";
// 					document.querySelector(".louceng" + jilou).appendChild(con1);
// 					con1.style.backgroundImage = "url("+item.image+")";
// 				}
// 				else{
// 					var con =document.createElement("div");
// 					con.className = "yilou2";
// 					con.classList.add("yi_div");					
// 					con.innerHTML = '<div class="yi2_div"></div><div class="img"></div><a>'
// 									+item.name+'</a><div class="yi-lab"></div><div class="persent"><div class="per"></div></div><div class="rate">'
// 									+item.rate+'%<br/><span>达成率</span></div><div class="sum">'
// 									+item.sum+'<br/><span>已筹金额</span></div><div class="amount">'
// 									+item.amount+'<br/><span>支持人数</span></div>';
// 					document.querySelector(".louceng"+jilou).appendChild(con);
// 					var setcon = document.querySelectorAll(".louceng"+ jilou + " .yilou2");
// 					item.label.forEach(function(item){
// 						var label = document.createElement("div");
// 						label.className = "label";
// 						label.innerText = item;
// 						setcon[index-1].querySelector(".yi-lab").appendChild(label);
// 					})
// 					setcon[index-1].querySelector(".img").style.backgroundImage = "url("+item.image+")";
// 				}
// 			})
// 		}
// 	};
// 	xhr.open("get","http://www.ikindness.cn/api/test/getFund?type="+jilou,1);
// 	xhr.send(null);
// }
// ajax();

function onRight(){	
	var rig = gets(".rig"),
		rigLeft = get("#tight_left"),
		rigRight = get("#tight_right"),
		shan1 = get(".shan1"),
		shang = gets(".shang"),
		temp = 0,
		temp1 = 0;	
	console.log(rig);
	for(var j=0;j<rig.length;j++){
		rig[j].index = j;
		rig[j].onclick = function(){
			if(this.index)temp1 = 0;
			else temp1 = 1;
			this.style.backgroundColor = "rgb(161,239,230)";
			rig[temp1].style.backgroundColor = "rgb(142,233,220)";
			
			for(var i=0;i<shang.length; i++){
				if(temp === 0){
					shang[0].style.backgroundImage ='url(\"./image/cc'+"0"+'-2.jpg\")';
					temp = 1;
					onRig1();
					onRig2();
				}else{
					shang[0].style.backgroundImage ='url(\"./image/cc'+"0"+'-1.jpg\")';
					temp = 0;
				}
			}
			}
	}
	function onRig1(){
		var rig_t = setTimeout(function(){
			if(temp == 1){
				shang[1].style.backgroundImage ='url(\"./image/cc'+"1"+'-2.jpg\")';
			}else{
				shang[1].style.backgroundImage ='url(\"./image/cc'+"1"+'-1.jpg\")';
			}
			
		},500);
	}
	function onRig2(){
		var rig_t = setTimeout(function(){
			if(temp == 1){
				shang[2].style.backgroundImage ='url(\"./image/cc'+"2"+'-2.jpg\")';
			}else{
				shang[2].style.backgroundImage ='url(\"./image/cc'+"2"+'-1.jpg\")';
			}
		},1000);
	}			
}
onRight();
function hot(){
	var  hotBot = get(".hot .bottom .bot"),
		botLeft =  get(".hot_0 .botLeft"),
		botRight =  get(".hot_0 .botRight"),
		a = 242,
		temp2 = 1;
		botLeft.onclick = function(){
			hotBot.style.left= -(a*temp2) + "px";
			temp2++;
			console.log(temp2);
			if(temp2 == 2)botRight.style.display = "block";
			if(temp2 == 4)botLeft.style.display = "none";
		}
		botRight.onclick = function(){
			temp2 = temp2 - 1;
			hotBot.style.left= (a-a*temp2) + "px";			
			console.log(temp2);
			if(temp2 == 1)botRight.style.display = "none";
			if(temp2 == 3)botLeft.style.display = "block";
		}
}
hot();
function onRanking(){
	var rankLeft = get(".ranking .left"),
		rankRig = gets(".ranking .right .rig1"),
		rankRigt1 = gets(".ranking .right .rig1 .rig1_2"),
		rankTrigon = get(".ranking .right .trigon"),
		rankRigtP = gets(".ranking .right .rig1 .rig1_2 p"),
		rankRigtSpan = gets(".ranking .right .rig1 .rig1_2 span"),
		temp = 0;
	for(var i = 0 ; i<rankRig.length ;i++){
		rankRig[i].index = i;
		rankRig[i].onmouseenter = function(){
			rankRig[temp].style.backgroundColor= "rgb(179,191,199)";
			rankRigt1[temp].style.borderBottom = "1px solid lightgrey";
			rankRigtP[temp].style.display = "block";
			rankRigtSpan[temp].style.fontSize = "12px";
			rankRigtSpan[temp].style.lineHeight = "12px";
			this.style.backgroundColor= "rgb(255,100,88)";
			rankRigt1[this.index].style.borderBottom = "none";
			rankRigtP[this.index].style.display = "none";
			rankRigtSpan[this.index].style.fontSize = "18px";
			rankRigtSpan[this.index].style.lineHeight = "62px";
			temp = this.index;
			rankTrigon.style.top= (16+62*temp) + "px";
			rankLeft.style.backgroundImage = 'url(./image/rank'+ (temp+1) + '.png)';
		}
	}
}
onRanking();
var newLine = [
	{
		name:"享『炫』彩生活，美悦达蓝牙香薰仪",
		rate:"116%", //达成率
		sum:"116939.00", //已筹金额
		amount:"661", //支持人数
		url:"url(./image/n1.jpg)",
		label:["家电","日常生活","家具"],
		type:1
	},
	{
		name:"锤子杯-一款打破常规的咖啡杯 将设计融入平凡生活",
		rate:"2%", //达成率
		sum:"1478.00", //已筹金额
		amount:"17", //支持人数
		url:"url(./image/n2.jpg)",
		label:["定制","原创","纯手工"],
		type:1
	},
	{
		name:"贝斐尔云智能冲奶机-80、90育儿革命，带娃不愁",
		rate:"332%", //达成率
		sum:"332942.00", //已筹金额
		amount:"454", //支持人数
		url:"url(./image/n3.jpg)",
		label:["日常生活","儿童智能","家具"],
		type:1
	},
	{
		name:"解锁《画江湖之不良人》新玩法，新技能，震撼上线！！",
		rate:"6%", //达成率
		sum:"658.00", //已筹金额
		amount:"10", //支持人数
		url:"url(./image/n4.jpg)",
		label:["周边产品","动画","正版授权"],
		type:1
	},
	{
		name:"高品质榉木折叠实木国际象棋 专属造型棋子",
		rate:"27.5%", //达成率
		sum:"2754.00", //已筹金额
		amount:"23", //支持人数
		url:"url(./image/n5.jpg)",
		label:["游戏","原创"],
		type:2
	},
	{
		name:"蚊子会电商白皮书实战干货系列 大促宝典",
		rate:"26%", //达成率
		sum:"26676.00", //已筹金额
		amount:"347",//支持人数
		url:"url(./image/n6.png)",
		label:["图书","办公"],
		type:2
	},
	{
		name:"【珍品】和田玉金镶玉（999千足金），非遗技艺！",
		rate:"131%", //达成率
		sum:"65534.00", //已筹金额
		amount:"188", //支持人数
		url:"url(./image/n7.jpg)",
		label:["定制","原创","纯手工"],
		type:2
	},
	{
		name:"一述原创 手工陶艺 新作【关羽】",
		rate:"12%", //达成率
		sum:"6491.00", //已筹金额
		amount:"117", //支持人数
		url:"url(./image/n8.jpg)",
		label:["摆件","原创","家居"],
		type:2
	},
	{
		name:"萌版北京娟人 非物质文化遗产手工制作！",
		rate:"53%", //达成率
		sum:"26820.00", //已筹金额
		amount:"190", //支持人数
		url:"url(./image/n9.jpg)",
		label:["摆件","本地特色","场地直供"],
		type:3
	},
	{
		name:"希孚魔镜 未来已来",
		rate:"36%", //达成率
		sum:"36885.00", //已筹金额
		amount:"14", //支持人数
		url:"url(./image/n10.jpg)",
		label:["健康医疗","家居","卫浴"],
		type:3
	},
	{
		name:"暴风魔镜小M，致力打造性价比最高VR虚拟现实眼镜！",
		rate:"259%", //达成率
		sum:"259884.00", //已筹金额
		amount:"2917", //支持人数
		url:"url(./image/n11.jpg)",
		label:["电影","家庭影院","穿戴设备"],
		type:3
	},
	{
		name:"天凉了，给农村留守儿童加衣",
		rate:"142%", //达成率
		sum:"14270.00", //已筹金额
		amount:"727", //支持人数
		url:"url(./image/n12.jpg)",
		label:["助学","人文关怀","扶贫"],
		type:3
	}
];
function newOnline(options){
	var online1 = get(".newOn1");
	var online2 = get(".newOn2");
	options.forEach(function(item,index){
		var newlin = document.createElement("div");	
		newlin.classList.add("newline");		
		newlin.innerHTML ='<div class="img"></div>'
							+ '<a href="">'+item.name+'</a>'
							+'<div class="newlab"></div>'
							+'<div class="rate">'+item.rate+'<br/><span>达成率</span></div>'
							+'<div class="sum">'+item.sum+'<br/><span>已筹金额</span></div>'
							+'<div class="amount">'+item.amount+'<br/><span>支持人数</span></div>'
							+'<div class="line1_div"><div class="line2_div"></div></div>';							
		newlin.querySelector(".img").style.backgroundImage = item.url;
		newlin.querySelector(".line2_div").style.width = item.rate;
		newT = setTimeout(function(){
			var lab = newlin.querySelector(".newlab");
				item.label.forEach(function(data){			
			var label = document.createElement("div");
			label.className = "label";
			label.innerText = data;
			lab.appendChild(label);
			clearTimeout(newT);
		})
		},1);
		online1.appendChild(newlin);
		var newlin2 = newlin.cloneNode(1);
		online2.appendChild(newlin2);
	});	
	//鼠标点击事件
	var newlineLeft = get(".newlineLeft"),
		newlineRight= get(".newlineRight"),
		temp = 1,
		change;
		newlineRight.onclick = function(){
			online1.style.left = -(temp*1217)+"px";
			temp++;			
			if(temp == 4){				
				online1.style.transition = "none";
				online1.style.left = 1217+"px";
				temp = 1;
			}
			if(temp ==1){
				online1.style.transition = "left 1s";
			}

			// else{
			// 	online2.style.display = "block";
			// }				 
			console.log(temp);
		}
	 	// newlineRight.onclick = function(){
			// online1.style.left = -(temp*1217)+"px";
			// temp++;
			// if(temp == 4){
			// 	change = online1;
			// 	online1 = online2;
			// 	online2 = change;
			// 	online2.style.left = 1190+"px";
			// 	online2.style.display = "none";
			// 	temp = 1;
			// 	online1.style.left = -((temp-1)*1217)+"px";
			// }
			// else{
			// 	online2.style.display = "block";
			// }				
			// console.log(temp);
	 	// }
}
newOnline(newLine);
