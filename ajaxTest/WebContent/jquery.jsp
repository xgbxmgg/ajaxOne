
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  
        "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 注意javascript编码为gbk；而网页编码为utf-8，因此需要设置javas的编码-->
<script type="text/javascript" src="js/jquery1.3.2.js"></script>
<script type="text/javascript" src="js/jqueryAjax.js" charset="gb2312"></script>

</head>
<body>
	<h1>Test Ajax</h1>
	<p>
		<br> 输入用户名： <input type="text" size="10" maxlength="8"
			id="clientTel" name="name"> <span id="randomCode"></span> <br>
		输入商品名： <input type="text" id="activityId" size="10" maxlength="8">
		<input type="submit" value="提交" onclick="submit()" />
</body>
</html>
