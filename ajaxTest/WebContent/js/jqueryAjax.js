function submit() {
	var clientTel = $("#clientTel").val();
	var activityId = $("#activityId").val();
	$.ajax({
		type : "post",// 发送方式
		url : "ajax.do",// 路径
		data : "clientTel=" + clientTel + "&activityId=" + activityId,
		success : function(text) {
			$("#randomCode").text(text);
		},
		error : function(text) {
			alert("对不起,用户ID不存在,请输入正确的用户ID");
		}
	});
}