
    var req;  
    function validate() {  
        //��ȡ���ύ������  
        var idField = document.getElementById("userName");  
        //����validate.do���servlet��ͬʱ�ѻ�ȡ�ı�����idField����url�ַ������Ա㴫�ݸ�validate.do  
        var url = "validate.do?id=" + escape(idField.value);                  
        //����һ��XMLHttpRequest����req  
        if(window.XMLHttpRequest) {  
            //IE7, Firefox, Opera֧��  
            req = new XMLHttpRequest();  
        }else if(window.ActiveXObject) {  
            //IE5,IE6֧��  
            req = new ActiveXObject("Microsoft.XMLHTTP");  
        }  
        /* 
         open(String method,String url, boolean )������3������ 
         method����ָ����servlet����������ʹ�õķ�������GET,POST�� 
         booleanֵָ���Ƿ��첽��trueΪʹ�ã�falseΪ��ʹ�á� 
         ����ʹ���첽������ᵽAjaxǿ����첽���ܡ� 
         */  
        req.open("GET", url, true);  
        //onreadystatechange���Դ��д����������Ӧ�ĺ���,��5��ȡֵ�ֱ����ͬ״̬  
        req.onreadystatechange = callback;  
        //send������������  
        req.send(null);                  
    }  
      
    function callback() {  
        if(req.readyState == 4 && req.status == 200) {  
            var check = req.responseText;  
            show (check);  
        }  
    }  
      
    function show(str) {  
        if(str == "OK") {  
            var show = "<font color='green'>��ϲ�㣡afdf</font>";  
            document.getElementById("info").innerHTML = show;  
        }  
        else if( str == "NO") {  
            var show = "<font color='red'>�Բ���afdaf</font>";  
            document.getElementById("info").innerHTML = show;  
        }  
    }  