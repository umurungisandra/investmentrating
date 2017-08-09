function selectUserCountry(){
    $.ajax({
        url:host+'/forms/user/dbconnect/ajax/select/dbconnect.jsp?analytics=selectcountry',
        datatype:'json',
        data:'africa='+1+
        '&admin=0',
        success:function(response){
            data = JSON.parse(response)
            $("#ddlUserCountry").html('<option value="0" disabled selected>Choose your country option</option>');
            //$("#ddlddlRegisterCountry").html('<option value="0" disabled selected>Choose your country option</option>')
            for(var i = 0; i < data.data.length; i++){
                $("#ddlUserCountry").append('<option value="'+data.data[i].countryid+'">'+data.data[i].country+'</option')
            }
            $('#ddlUserCountry').material_select();
        }
    })
}   
    
function selectUsers() {
        $.ajax({
            url: host+"/forms/admin/usermanager/dbconnect/ajax/select/dbconnect.jsp?analytics=selectcontact",
            datatype: 'json',
            data:'contactid=0',
            //data:'contactnumberid',
            //data:'contactemailid',
            success: function (response) {
                //alert(response)
                if (response.length > 12) {
                    data = JSON.parse(response)
                    
                    var headers = ['id','name','number', 'email', 'createddate', 'status','edit'];
                    var lblfunction = ['{lblfunction}', "alert('hellolabel')"]
                    var divfunction = function () { }
                    var lblclass = ['', '']
                    var divclass = ['', '']

                    child = dataGrid(headers, data, 'DataGridTableHeader2', 'DataGridTableRow2', lblfunction, divfunction, 'DataGridTableContract1')
                    parent = document.getElementById('divSystemUsers')
                    parent.innerHTML = '';
                    parent.appendChild(child)
                }
            }
        })
    }

 function selectContactDetail(contactid,contactemailid,contactnumberid) {
          hdnContactId.value=contactid;
          hdnContactEmailId.value=contactemailid;
          hdnContactNumberId.value=contactnumberid;
        $.ajax({
           url: host+"/forms/admin/usermanager/dbconnect/ajax/select/dbconnect.jsp?analytics=selectcontact",
            datatype: 'json',
            data:'contactid='+contactid,

            success: function (response) {
                if (response.length > 12) {
                data = JSON.parse(response)
                    txtForename.value= data.data[0].forename;
                    txtSurname.value= data.data[0].surname;
                    txtRegisterEmail.value= data.data[0].email;
                    document.getElementById("txtRegisterPassword").placeholder = "RESETS Password";
                    setDDLSelected(ddlCountry,data.data[0].countryid);
                    txtMobile.value=data.data[0].number;
                  } 
               
           }
         })
    }
