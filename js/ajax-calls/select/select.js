function login(){
	//alert()
	$.ajax({
	    url: '/servicedesk/forms/login/dbconnect/ajax/select/dbconnect.jsp?ajax=selectlogin',
            datatype: 'json',
            data: 'email=' + txtEmail.value + '&password=' + txtPassword.value,
	             beforeSend: function(){},
              success: function (response) {
              	if (response.length > 12) {
              			data = JSON.parse(response)
              			hdnUserId.value=data.data[0].userid;
                    hdnForename.value = data.data[0].forename;
                    hdnSurname.value = data.data[0].surname;
                    hdnEmail.value = data.data[0].email;


              			showLoginDialog("modal-open-new-login")
//$("error-message").text("Login failed").fadeIn();
                    checkLogin()        			
                    
                // if(hdnUserId.value==0 && txtPassword.value==0){
                
                  
            		}else{
            			alert("Login failure")
            		}
	         }
	})			
}