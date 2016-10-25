function ajax(option){
	var xhr =new XMLHttpRequest(),
		type = option.type,
		data = option.data;
		// readyState
		// 0 请求未发送
		// 1 请求打开
		// 2 请求发送成功
		// 3 服务端成功接收请求
		// 4 服务端响应成功
	function queryString(data){
		var str = "",
			i;
		for(i in data){
			str += "&" + i + "=" + data[i];
		}
		return str.slice(1);
	}
	xhr.onreadystatechange = function(){
		console.log(["请求未发送", "请求打开", "请求发送成功", "服务端成功接收请求", "服务端响应成功"][xhr.readyState]);
		xhr.readyState === 4 && xhr.status === 200 && option.success(option.dataType === "json" ? JSON.parse(xhr.responseText) : xhr.responseText);
	};
	//打开请求
	xhr.open(type, option.url + (type === "get" ? "?" + queryString(data) : ""), option.async);
	// 设置请求头
	type === "post" && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post
	//发送请求
	xhr.send(type === "get" ? null : queryString(data));
}