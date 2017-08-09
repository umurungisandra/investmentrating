function createUser() {
        $.ajax({
            url: host+"/forms/admin/usermanager/dbconnect/ajax/insert/dbconnect.jsp?analytics=insertcontact",
            datatype: 'json',
            data: 'forename=' + ddlForename.value + 
        		'&surname=' + ddlSurname.value + 
        		'&email=' + ddlEmail.value + 
        		'&countryid=' +ddlCountry.value + 
        		'&password=' + txtRegisterPassword.value + 
        		'&createdby=' + hdnUserId.value+
                '&usertypeid=' +ddlUserType.value+
                '&parentcontactid=' +0+
                '&updatecontactid='+hdnContactId.value+
                '&contactemailid='+hdnContactEmailId.value+
                '&contactnumberid='+hdnContactNumberId.value+
                '&number='+txtMobile.value,
            success: function (response) {
                if (response.length > 12) {
                    data = JSON.parse(response)
                    $("#hdnUserId").val(data.data[0].contactid)
                    if($("#divLogin").length){
                        $("#btnCreateClose").click();
                        $("#aHome").click();
                        hdnForename.value = data.data[0].forename;
                        hdnSurname.value = data.data[0].surname;
                        hdnEmail.value = data.data[0].email;
                    }else{
                        alert('user created')
                         $("#btnCreateClose").click();
                        clearForm()
                        selectUsers()
                    }

                  }
            }
        })
    }
