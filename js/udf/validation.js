
function textBoxValidation(obj, chars) {
    if(obj.value.length >= chars){
        validationAction(obj, false)
        return false;
    }else{
        validationAction(obj, true)
        return true;
    }
}

function quantityValidation(obj,num, fromObj, batchObj, toObj) {
    fromCapacity =  getCapacity(fromObj,1)
    toCapacity = getCapacity(toObj, 1)
    fromCurrentStock = getCurrentStock(fromObj, 1)
    toCurrenttSock = getCurrentStock(toObj, 1)
    toMaxCurrentIntake = toCapacity - toCurrenttSock;

    batchQty = getCapacity(batchObj, 2)
    amount = obj.value / 1

    if (amount <= toMaxCurrentIntake && amount <= batchQty) {
        //alert("ok");
        numberValidation(obj, obj.value);
    } else {
        alert("You are transferring too much.Please verify if amounts are correct!")
        validationAction(obj, true)
        return true;
    }
 
}
function getCapacity(obj,type) {
    if (type == 1) {
        x = $(obj).find(":selected").text().split('/');
        if (x[1] != undefined) {
            y = x[1].split(')');
            //alert(y[0])

            return y[0] / 1
        }
    } else {
        x = $(obj).find(":selected").text().split('(');
        if (x[1] != undefined) {
            y = x[1].split(')');
            //alert(y[0])
            return y[0] / 1
        }
    }
}
function getCurrentStock(obj, type) {
    if (type == 1) {
        x = $(obj).find(":selected").text().split('(');
        if (x[1] != undefined) {
            y = x[1].split('/');
            //alert(y[0])
            return y[0] / 1
        }
    } else {
        x = $(obj).find(":selected").text().split('(');
        if (x[1] != undefined) {
            y = x[1].split(')');
            //alert(y[0])
            return y[0] / 1
        }
    }
}

function dropDownListValidation(obj, value) {
    if (obj.value != value) {
        validationAction(obj, false)
        return false;
    } else {
        validationAction(obj, true)
        return true;
    }
}
function numberValidation(obj,num) {
    n = num / 0.1
    if (!isNaN(n) && toString(n).length > 0 && num != '' ) {
        validationAction(obj, false)
        return false;
    } else {
        validationAction(obj, true)
        return true;
    }
}
function numberValidation2(num) {
    n = num / 0.1
    if (!isNaN(n) && toString(n).length > 0 && num != '') {    
        return true;
    } else { 
        return false;
    }
}
function dateValidation(obj, date) {
    d = new Date(date);
    if (!isNaN(d) && date.length == 10 && date != '') {
        validationAction(obj, false)
        return false;
    } else {
        validationAction(obj, true)
        return true;
    }
}
function ddlDateValidation(id) {
    year = document.getElementById('ddlYear' + id)
    month = document.getElementById('ddlMonth' + id)
    day = document.getElementById('ddlDay' + id)

    if (year.value == '0' || month.value == '0' || day.value == '0') {
        alert()
    } else {
        alert()
    }
}
function timeValidation(obj, time) {
    if (time.length == 5) {
        validationAction(obj, false)
        return false;
    } else {
        validationAction(obj, true)
        return true;
    }
}
function validationAction(obj, status) {
    o = document.getElementById('e' + obj.id)
    if (o != null && !status) {
        o.style.display = 'none'
        validateForm(o.title)
    } else {
        o.style.display = 'block'
        validateForm(o.title)
    }
}
function validateForm(group){
    errors = document.getElementsByTagName('error')
    count=0;
    for (var i = 0; i < errors.length; i++) {
        if (errors[i].title != null) {
            if (errors[i].style.display == 'block' && errors[i].title == group) {
                count++;
            }
        }
    }
    btn = document.getElementsByTagName('button')
    for (var i = 0; i < btn.length; i++) {
        if (btn[i].title != null) {
            if (count == 0 && btn[i].title == group) {
                btn[i].style.display = 'block';
            } else if (btn[i].title == group) {
                btn[i].style.display = 'none';
            }
        }
    }
    //alert(count + ' : ' + btn.title)
}

function validateCollection(className){
    var coll = $("."+className).val()
    console.log(className)
    console.log(coll.length)
    console.log(coll)
    if(coll != null){
        console.log(coll.length)
        for(var i = 0; i < coll.length; i++){
            console.log(coll[i].checked)
            console.log($("."+className+":checked").length)
            if($("."+className+":checked").length > 0 || $("."+className+":selected").length > 0){
                return true
            }else{
                return false
            }
        }
    }else{
        return false;
    }
}
  function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
  }
  function validateTextBox(text, minchar){
    if(text.length>=minchar){
      return true;
    }else{
      return false;
    }
  }
  function validatePhone(inputtxt){  
    var phoneno1 = /^([+]{1})?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    var phoneno2 = /^([+]{1})?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;  
    if(inputtxt.match(phoneno1) || inputtxt.match(phoneno2)) {  
        console.log(inputtxt.match(phoneno1))
        return true;  
    }else{  
        console.log((false));  
        return false;  
    }  
} 

    function validateMultiSelect(ObjId){
        coll = $("select#"+ObjId).val()
        //console.log(coll.length)
        if(coll.length > 0){
            return true
        }else{
            return false
        }
    }

    function validateSelect(objId){
        coll = $("#"+objId).val()
        console.log(coll)
        if(coll/1 > 0){
            return true
        }else{
            return false
        }
    }

    function validateNumber(num) {
    n = num / 0.1
    if (!isNaN(n) && toString(n).length > 0 && num != '') {    
        return true;
    } else { 
        return false;
    }
}