function changeStatus(id) {
        $.ajax({
            url: host+"/forms/admin/usermanager/dbconnect/ajax/update/dbconnect.jsp?analytics=changestatus",
            datatype: 'json',
            data: '&contactid=' + id,
            success: function (response) {
                selectUsers()
            }
        })
    }