var label = []
var pLabel = []
var rLabel = []
function getURLParameters(paramName) {
    var sURL = window.document.URL.toString();
    if (sURL.indexOf("?") > 0) {
        var arrParams = sURL.split("?");
        var arrURLParams = arrParams[1].split("&");
        var arrParamNames = new Array(arrURLParams.length);
        var arrParamValues = new Array(arrURLParams.length);

        var i = 0;
        for (i = 0; i < arrURLParams.length; i++) {
            var sParam = arrURLParams[i].split("=");
            arrParamNames[i] = sParam[0];
            if (sParam[1] != "")
                arrParamValues[i] = unescape(sParam[1]);
            else
                arrParamValues[i] = "No Value";
        }

        for (i = 0; i < arrURLParams.length; i++) {
            if (arrParamNames[i] == paramName) {
                //alert("Parameter:" + arrParamValues[i]);
                return arrParamValues[i];
            }
        }
        return "No Parameters Found";
    }
}
function getUserColor(id) {
    switch (id) {
        case '1': return '#00FFFF'; break;
        case '2': return '#FF4500'; break;
        case '3': return '#7FFFD4'; break;
        case '4': return '#FF0000'; break;
        case '5': return '#FF00FF'; break;
        case '6': return '#6495ED'; break;
        case '7': return '#00FFFF'; break;
        case '8': return '#00008B'; break;
        case '9': return '#008B8B'; break;
        case '10': return '#00BFFF'; break;
        case '11': return '#483D8B'; break;
        case '12': return '#1E90FF'; break;
        case '13': return '#4B0082'; break;
        case '14': return '#ADD8E6'; break;
        case '15': return '#FFA07A'; break;
        case '16': return '#F08080'; break;
        case '17': return '#FFB6C1'; break;
        case '18': return '#800000'; break;
        case '19': return '#C71585'; break;
        case '20': return '#DA70D6'; break;
    }
}
function dataGrid1(headers,data, headerclass,rowclass,lblfunction, divfunction,tableclass ) {
    table = document.createElement('table');
    table.setAttribute('class', 'table m-table table-bordered table-hover table-heading')
    //table.setAttribute('cellspacing', '1')
    //table.setAttribute('cellpadding','1')
    table.setAttribute('style','padding-left:0%;width:100%')
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    //tr.setAttribute('class', headerclass)
    for (var i = 0; i < headers.length; i++) {
        td = document.createElement('th')
        td.onclick = divfunction;
        if (headers != undefined)
            td.innerHTML = headers[i]
        tr.appendChild(td);
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    var id = 0;
    tbody = document.createElement('tbody');
    for (var i = 0; i < data.data.length; i++) {
        tr = document.createElement('tr');
        //tr.setAttribute('class', rowclass)
        for (var e = 0; e < headers.length ; e++) {
            td = document.createElement('td')
            //td.setAttribute('align','right')
            td.onclick = divfunction;
            for (propName in data.data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        id = data.data[i][propName]
                    }
                    
                    td.setAttribute('id',id)
                    td.innerHTML = (data.data[i][propName])
                    //td.innerHTML = data.data[i][propName]
                }
            }   
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        table.appendChild(tbody);
    }
    return table;
}
function dataGridDash(headers, data, headerclass, rowclass, lblfunction, divfunction, tableclass) {
    table = document.createElement('table');
    table.setAttribute('class', 'table-hove  rtable')
    table.setAttribute('style', 'width:100%; font-size:0.75em')
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    for (var i = 0; i < headers.length; i++) {
        td = document.createElement('th')
        td.onclick = divfunction;
        if (headers != undefined)
            td.innerHTML = headers[i]
        td.setAttribute('class', 'element2')
        if(headers[i] == 'company'){
            td.setAttribute('style', 'text-align:left')
        }else{
            td.setAttribute('style', 'text-align:right')
        }
        tr.appendChild(td);
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    var id = 0;
    tbody = document.createElement('tbody');
    for (var i = 0; i < data.length; i++) {
        tr = document.createElement('tr');
        
        for (var e = 0; e < headers.length; e++) {
            td = document.createElement('td')

            for (propName in data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        id = data[i][propName]
                    }
                    n = data[i][propName] / 0.1
                    if (!isNaN(n) && toString(n).length > 0 && data[i][propName] != ''  && propName != 'year') {
                        td.innerHTML = addCommas((data[i][propName]))
                        //td.setAttribute("align,right")
                    }else{
                        td.innerHTML = data[i][propName]
                    }
                    td.setAttribute('id', id)
                    td.setAttribute('class', 'element2')
                    if(propName == 'company'){
                        td.setAttribute('align', 'left')
                    }else{
                        if(propName == 'status'){
                            td.setAttribute('style', 'text-align:right')
                        }else{
                            td.setAttribute('align', 'right')
                        }
                    }         
                }
                console.log(propName)
                if(propName == 'trendid'){
                   td.setAttribute('id', data[i]['trendid']) 
                   td.innerHTML= '<script>$("#'+data[i]["trendid"]+'").sparkline(['+data[i]["amount1"]+','+data[i]["amount2"]+','+data[i]["amount3"]+','+data[i]["amount4"]+'], {type: "line"});</script>'
                   console.log('<script>$("#'+data[i]["trendid"]+'").sparkline(['+data[i]["amount1"]+','+data[i]["amount2"]+','+data[i]["amount3"]+','+data[i]["amount4"]+'], {type: "line"});</script>')
                }    
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        table.appendChild(tbody);
    }
    return table;
}
function dataGridDash1(headers, data, headerclass, rowclass, lblfunction, divfunction, tableclass) {
    table = document.createElement('table');
    table.setAttribute('class', '')
    table.setAttribute('style', 'width:100%')
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    for (var i = 0; i < headers.length; i++) {
        td = document.createElement('th')
        td.onclick = divfunction;
        if (headers != undefined)
            td.innerHTML = headers[i]
        td.setAttribute('class', 'element2')
        if(headers[i] == 'sector' || headers[i] == 'company'){
            td.setAttribute('style', 'text-align:left')
        }else{
            td.setAttribute('style', 'text-align:right')
        }
        tr.appendChild(td);
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    var id = 0;
    tbody = document.createElement('tbody');
    for (var i = 0; i < data.length; i++) {
        tr = document.createElement('tr');
        
        for (var e = 0; e < headers.length; e++) {
            td = document.createElement('td')

            for (propName in data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        id = data[i][propName]
                    }
                    n = data[i][propName] / 0.1
                    if (!isNaN(n) && toString(n).length > 0 && data[i][propName] != ''  && propName != 'year') {
                        td.innerHTML = addCommas((data[i][propName]))
                        //td.setAttribute("align","right")
                    }else{
                        td.innerHTML = data[i][propName]
                    }
                    td.setAttribute('id', id)
                    td.setAttribute('class', 'element2')
                    if(propName == 'sector' || propName == 'company'){
                        td.setAttribute('align', 'left')
                    }else{
                        if(propName == 'status' || propName == 'company'){
                            td.setAttribute('style', 'text-align:right')
                        }else{
                            td.setAttribute('align', 'right')
                        }
                    }

                    
                }
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        table.appendChild(tbody);
    }
    return table;
}
function dataGridDash2(headers, data, headerclass, rowclass, lblfunction, divfunction, tableclass) {
    table = document.createElement('table');
    table.setAttribute('class', 'table-hove  rtable col-md-12')
    table.setAttribute('style', 'width:100%')
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    for (var i = 0; i < headers.length; i++) {
        td = document.createElement('th')
        td.onclick = divfunction;
        if (headers != undefined)
            td.innerHTML = headers[i]
        td.setAttribute('class', 'element2')
        if(headers[i] == 'sector' || headers[i] == 'company'){
            td.setAttribute('style', 'text-align:left')
        }else{
            td.setAttribute('style', 'text-align:right')
        }
        tr.appendChild(td);
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    var id = 0;
    tbody = document.createElement('tbody');
    for (var i = 0; i < data.data.length; i++) {
        tr = document.createElement('tr');
        
        for (var e = 0; e < headers.length; e++) {
            td = document.createElement('td')

            for (propName in data.data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        id = data.data[i][propName]
                    }
                    //n = data.data[i][propName] / 0.1
                   // if (!isNaN(n) && toString(n).length > 0 && data.data[i][propName] != ''  && propName != 'year') {
                    //    td.innerHTML = addCommas((data.data[i][propName]))
                        //td.setAttribute("align","right")
                   // }else{
                        td.innerHTML = data.data[i][propName]
                    //}
                    td.setAttribute('id', id)
                    td.setAttribute('class', 'element2')
                    if(propName == 'sector' || propName == 'company'){
                        td.setAttribute('align', 'left')
                    }else{
                        if(propName == 'status' || propName == 'company'){
                            td.setAttribute('style', 'text-align:right')
                        }else{
                            td.setAttribute('align', 'right')
                        }
                    }

                    
                }
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        table.appendChild(tbody);
    }
    return table;
}
function getCompanyId(data){
	return data[i].entityKey
}
function getMaxYear(data){
	var max = data[0].year;
	for(var i = 0; i < data.length; i++){
		if(data[i].year/1 > max)
			max = data[i].year
	}
	return max;
}
function getMinYear(data){
	var min = data[0].year;
	for(var i = 0 ; i < data.length; i++){
		if(data[i].year/1 < min)
			min = data[i].year
	}
	return min;
}

function dataGrid(headers, data, headerclass, rowclass, lblfunction, divfunction, tableclass) {
    table = document.createElement('table');
    table.setAttribute('class', 'table table-striped table-bordered table-hover table-condensed small')
    table.setAttribute('style', 'padding-left:1.5%;width:97%')
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    //tr.setAttribute('class', headerclass)
    for (var i = 0; i < headers.length; i++) {
        td = document.createElement('th')
        td.onclick = divfunction;
        if (headers != undefined){
            if(headers[i] == 'current year amount -4' ){
                td.innerHTML = '2012'
            }else if(headers[i] == 'current year amount -3'){
                td.innerHTML = '2013'                
            }else if(headers[i] == 'current year amount -2'){
                td.innerHTML = '2014'
            }else if(headers[i] == 'current year amount -1'){
                td.innerHTML = '2015'
            }else{
                td.innerHTML = headers[i]
            }
        }

        tr.appendChild(td);
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    var id = 0;
    tbody = document.createElement('tbody');
    for (var i = 0; i < data.data.length; i++) {
        tr = document.createElement('tr');
        //tr.setAttribute('class', rowclass);
        
        for (var e = 0; e < headers.length; e++) {
            td = document.createElement('td')
            //td.setAttribute('align', 'right')

            for (propName in data.data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        id = data.data[i][propName]
                    }
                    td.setAttribute('id', id)
                    n = data.data[i][propName] / 0.1
                    if (!isNaN(n) && toString(n).length > 0 && data.data[i][propName] != ''  && propName != 'year' && propName != 'id') {
                        //td.innerHTML = data.data[i][propName]
                        if(propName == 'current year amount -1' && e==5){
                            td.innerHTML = isZero(addCommas((data.data[i][propName])))
                        }else if(propName == 'current year amount -2' && e==4){
                            td.innerHTML = isZero(addCommas((data.data[i][propName])))               
                        }else if(propName == 'current year amount -3' && e==3){
                            td.innerHTML = isZero(addCommas((data.data[i][propName])))
                        }else if(propName == 'current year amount -4' && e==2){
                            td.innerHTML = isZero(addCommas((data.data[i][propName])))
                        }else{
                            td.innerHTML = isZero(addCommas(data.data[i][propName]))
                        }
                        td.setAttribute("align","right")
                    }else{
                        td.innerHTML = data.data[i][propName]
                         console.log(propName+' : '+data.data[i][propName])
                    }
                    //td.innerHTML = data.data[i][propName]
                }
                 console.log(propName+' : '+data.data[i][propName])
                //console.log(propName)
                //if(propName == 'trendid'){
                //    var div = document.createElement("div")
                //    div.setAttribute('id', "spark_"+data.data[i]['trendid']) 
                //    var scripttext = '$("#spark_'+data.data[i]["trendid"]+'").sparkline(['+data.data[i]["amount1"]+','+data.data[i]["amount2"]+','+data.data[i]["amount3"]+','+data.data[i]["amount4"]+'], {type: "line"})'
                //    $("head").append($("<script>"+scripttext+"</script>"));
                //   td.append(div)
                //}        
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        table.appendChild(tbody);
    }
    return table;
}
function isZero(val){
    if(val == 0 || val == '0'){
        return '-'
    }else{
        return val
    }
}
function dataGrid2(headers, data, headerclass, rowclass, lblfunction, divfunction, tableclass) {
    table = document.createElement('table');
    table.setAttribute('class', 'table m-table table-bordered table-hover table-heading')
    table.setAttribute('style', 'padding-left:0%;width:100%')
    //table.setAttribute('cellspacing', '1')
    //table.setAttribute('cellpadding', '1')
    thead = document.createElement('thead');
    tr = document.createElement('tr');
    tr.onclick = divfunction
    //tr.setAttribute('class', headerclass)
    for (var i = 0; i < headers.length; i++) {
        td = document.createElement('th')
        //td.onclick = divfunction;
        if (headers != undefined)
            td.innerHTML = headers[i]
        tr.appendChild(td);
    }
    thead.appendChild(tr)
    table.appendChild(thead)
    var id = 0;
    tbody = document.createElement('tbody');
    for (var i = 0; i < data.data.length; i++) {
        tr = document.createElement('tr');
        //tr.setAttribute('class', rowclass)
        for (var e = 0; e < headers.length ; e++) {
            td = document.createElement('td')

            for (propName in data.data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        id = data.data[i][propName]
                    }
                    td.setAttribute('id', id)
                    td.onclick = divfunction
                    td.innerHTML = (data.data[i][propName])
                    //td.innerHTML = data.data[i][propName]
                }
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
        table.appendChild(tbody);
    }
    return table;
}
function searchBox(data,headers, textboxid, datalistid,func) {
    div = document.createElement('div')
    textBox = document.createElement('input');
    textBox.onsearch = func;
    textBox.setAttribute('style', 'left:1%;top:1%;width:auto;');
    textBox.setAttribute('type', 'search');
    textBox.setAttribute('id', textboxid);
    textBox.setAttribute('list', datalistid)
    textBox.setAttribute('placeholder', 'search text')
    //textBox.setAttribute('style', 'width:400px')
    datalist = document.createElement('datalist');
    datalist.setAttribute('id', datalistid)
    for (var i = 0; i < data.data.length; i++) {
        option = document.createElement('option');
        for (var e = 0; e < headers.length ; e++) {
            for (propName in data.data[0]) {
                if (propName == headers[e]) {
                    if (e == 0) {
                        option.setAttribute('label', data.data[i][propName])
                        //option.setAttribute('value', data.data[i][propName])
                    }
                    if(e == 1)
                        option.innerHTML = data.data[i][propName]
                }
            }
            option.innerHTML = option.innerHTML + ' - ' + data.data[i].id
        }
       // option.setAttribute('onclick', 'alert(this.label)')
        datalist.appendChild(option)
        div.appendChild(textBox);
        div.appendChild(datalist);
    }
    return div;
}
function ddlList(data, headers, id) {
    div = document.createElement('div')
    select = document.createElement('select');
    select.setAttribute('onchange', 'alert(this.value)');
    select.setAttribute('id', id);
    option = document.createElement('option');
    option.setAttribute('value', 0)
    option.innerHTML = 'Please select'
    select.appendChild(option)
    for (var i = 0; i < data.data.length; i++) {
        option = document.createElement('option');
        for (var e = 0; e < headers.length ; e++) {
            for (propName in obj.data[0]) {
                if (propName == headers[e]) {
                    //alert(e + ':' + data.data[i][propName])
                    if (e == 0)
                        option.setAttribute('value', id+'_'+data.data[i][propName])
                    if (e == 1)
                        option.innerHTML = data.data[i][propName]
                }
            }
        }  
        select.appendChild(option)
        div.appendChild(select);
    }
    return div;
}
function loadDDL(obj, data) {
    obj.innerHTML = '';
    option = document.createElement('option');
    option.innerHTML = 'Please select';
    option.value = 0;
    obj.appendChild(option)
    for (var i=0; i < data.data.length; i++) {
        option = document.createElement('option');
        option.innerHTML = data.data[i].desc;
        option.value = data.data[i].id;
        obj.appendChild(option)
    }
}
function setDDLSelected(object, value) {
    option = object.getElementsByTagName('option')
    for (var i = 0 ; i < option.length; i++) {
        if (option[i].value == value) {
            option[i].selected = true;
            break;
        }
    }
}
function drawCircle(parent, id, radius, color, top, left, objectid, type, activity) {
    //alert(id+' '+parent)
    var c = document.createElement('canvas');
    c.setAttribute('id', id);
    parent.appendChild(c)
    canvas = document.getElementById(id);
    canvas.setAttribute('width', (radius * 2) + 3);
    canvas.setAttribute('height', (radius * 2) + 3);
    canvas.setAttribute('title', objectid);
    canvas.setAttribute('style', 'position:absolute;top:' + top + '%;left:' + left + '%;')
    canvas.setAttribute('class', 'planObjects1')
    canvas.setAttribute('draggable', 'true');
    //canvas.onmouseover = function (e) { $("#divActivity").offset({ left: e.pageX, top: e.pageY }); }
    canvas.onclick = function () { panelTransition(2, this); }
    var context = canvas.getContext('2d');
    var X = radius;
    var Y = radius;
    context.beginPath();
    context.arc(X, Y, radius, 0, 2 * Math.PI, false);
    //context.fillStyle = color;
    if (activity != '1') {
        context.fillStyle = color;
    } else {
        context.fillStyle = 'red'
    }
    context.fill();
    context.lineWidth = 1;
    //context.strokeStyle = 'white'
    if (activity != '1') {
        context.strokeStyle = '#aaa';
    } else {
        context.strokeStyle = 'red'
    }
    context.stroke();
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var text = id;

    context.font = (radius * .75) + 'pt Calibri';
    context.textAlign = 'center';
    context.fillStyle = '000';
    context.fillText(text, x, y);
}
function drawPolygon(parent, id, height, width, color, top, left, objectid, type, vol, activity) {
    div = document.createElement('div')
    div.setAttribute('style', 'width:' + (width*xfactor).toFixed(0) + 'px;height:' + (height*yfactor).toFixed(0) + 'px;position:absolute;top:' + top + '%;left:' + left + '%')
    div.setAttribute('id', 'div' + id);
    div.setAttribute('title', objectid);
    div.setAttribute('class', 'planObjects2')
    div.setAttribute('draggable', 'true');
    //div.onclick = function () { panelTransition(2, this); }
    parent.appendChild(div)
    var c = document.createElement('canvas');
    
    c.setAttribute('id', id);
    div.appendChild(c)
    canvas = document.getElementById(id);  
    canvas.setAttribute('width', div.clientWidth);
    canvas.setAttribute('height', div.clientHeight);
    canvas.setAttribute('title', objectid);
    canvas.setAttribute('class', 'planObjects2');
    canvas.setAttribute('draggable', 'true');
    canvas.onclick = function () { panelTransition(2, this); }
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0, div.clientHeight);
    context.lineTo(div.clientWidth, div.clientHeight);
    context.lineWidth = div.clientHeight * 2;
    if (activity != '1') {
        context.strokeStyle = color;
    } else {
        context.strokeStyle = 'red'
    }
    context.lineCap = 'butt';
    context.stroke();

    var x = canvas.width / 2;
    var y = canvas.height / 10;
    var text = id;

    context.font =  '10pt Calibri';
    context.textAlign = 'center';
    context.fillStyle = 'white';
    context.fillText(text, x, y);
}
function drawEquipment(parent, id, height, width, color, top, left, objectid, type, activity) {
    var c = document.createElement('canvas');
    c.setAttribute('id', id);
    parent.appendChild(c)
    canvas = document.getElementById(id);
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);
    canvas.setAttribute('title', objectid);
    canvas.setAttribute('style', 'position:absolute;top:' + top + '%;left:' + left + '%;')
    canvas.setAttribute('class', 'planObjects1')
    canvas.onclick = function () { panelTransition(2, this); }
    var context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(0, height);
    context.lineTo(width, height);
    context.lineWidth = height;
    if (activity != '1') {
        context.strokeStyle = color;
    } else {
        context.strokeStyle = 'red'
    }
    context.lineCap = 'butt';
    context.stroke();

    var x = canvas.width / 2;
    var y = canvas.height / 3;
    var text = id;

    context.font = '8pt Calibri';
    context.textAlign = 'center';
    context.fillStyle = 'white';
    context.fillText(text, x, y);
}
function NxtPage() {
    if (hNoPages.value / 1 > hPage.value / 1) {
        hPage.value = hPage.value / 1 + 1;
        return hPage.value;
        //pgInd.innerHTML = hPage.value;
    } else {
        alert('There are no further results')

    }
}

function PrevPage() {
    if (hPage.value / 1 > 1) {
        hPage.value = hPage.value / 1 - 1
        return hPage.value;
        //pgInd.innerHTML = hPage.value;
    } else {
        alert('This is the first page')
    }
}

function clearPages() {
    hPage.value = 1;
}
function addCommas(nStr) {
    //console.log(nStr)
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

