function submit() {
	var clientTel = $("#clientTel").val();
	var activityId = $("#activityId").val();
	$.ajax({
		type : "post",// ���ͷ�ʽ
		url : "ajax.do",// ·��
		data : "clientTel=" + clientTel + "&activityId=" + activityId,
		success : function(text) {
			$("#randomCode").text(text);
		},
		error : function(text) {
			alert("�Բ���,�û�ID������,��������ȷ���û�ID");
		}
	});
}