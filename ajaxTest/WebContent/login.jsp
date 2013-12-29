
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  
        "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- 注意javascript编码为gbk；而网页编码为utf-8，因此需要设置javas的编码-->
<script type="text/javascript" src="js/Ajax.js"  charset="gb2312"></script>

</head>
<body>
	<h1>Test Ajax</h1>
	<p>
	<form action="" method="get" name="form">
		<br> 输入用户名： <input type="text" size="10" maxlength="8"
			id="userName" name="name" onblur="validate()"> <span
			id="info"></span> <br> 输入商品名： <input type="text" size="10"
			maxlength="8">
	</form>
</body>
</html>
