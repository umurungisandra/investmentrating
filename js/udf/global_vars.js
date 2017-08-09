//host = 'http://www.127.0.0.1\\portal/ir2'

var ip = location.host;
host = 'http://'+ip+'/incogneta';
host2 = 'http://'+ip+'/monitoring';
//host2 = 'http://'+ip+'/investments';
//host = 'http://192.168.177.73/ir2'
//host = 'http://192.168.177.80/ir2'
var longitude = ''
var latitude = ''

var sparkheader =   '<div class="col-lg-12" >' +
                    '  <p >' +
                    '    <strong>{question}</strong>'+
                    '  </p>' +
                    '</div>'


var sparkbodyelement =  '<div class="progress-group">'+
                            '    <span class="progress-text">{option}</span>'+
                            '    <span class="progress-number"><b>{ratio}%</b></span>'+
                            '    <div class="progress sm">'+
                            '        <div class="progress-bar progress-bar-{color}" style="width: {ratio}%"></div>'+
                            '    </div>'+
                        '</div>'

function getSparklineColor(i) {
    switch (i) {
        case 0: return 'aqua'; break;
        case 1: return 'red'; break;
        case 2: return 'green'; break;
        case 3: return 'yellow'; break;
        case 4: return ''; break;
        case 5: return ''; break;
        case 6: return ''; break;
    }
}

var squestionid; var ssurveyid;
function getStatistics(questionid, surveyid) {
    squestionid = questionid;
    ssurveyid = surveyid;
    $.ajax({
        url: host + "/ajax/dbconnect.jsp?ajax=reportresponse",
        datatype: 'json',
        data: 'surveyid=' + surveyid + '&questionid=' + questionid + '&optionid=0&responseindexid=0&cycle=0&userid=0',
        success: function (response) {
            if (response.length > 12) {
                data = JSON.parse(response)
                loadStaticsSparkline(data);
            }
        }
    })
}
function loadStaticsSparkline(data) {
    root = document.getElementById(squestionid + '_' + ssurveyid)
    body = sparkheader.replace('{question}', data.data[0].question) + '<br/>';
    $("#" + squestionid + "_" + ssurveyid).append(body)
    $("#" + squestionid + "_" + ssurveyid).append('<div class="row"  style="margin-left:30px">')
    for (var i = 0; i < data.data.length; i++) {
        var body = sparkbodyelement.replace('{option}', data.data[i].option).replace('{responsecount}', data.data[i].responsecount).replace('{responsecounttotal}', data.data[i].totalresponses).replace('{ratio}', data.data[i].ratio).replace('{color}', getSparklineColor(i)) + '<br/>'
        $("#" + squestionid + "_" + ssurveyid).append(body)
    }
    
}

function loadStaticsSparkline1(data, coloroption) {
    root = document.getElementById(squestionid + '_' + ssurveyid)
	//$("#" + squestionid + "_" + ssurveyid).append('<div class="col-lg-12 box-body" style="background-color:#fff" >')
    for (var i = 0; i < data.length; i++) {
        var body = sparkbodyelement.replace('{option}', data[i].option).replace('{ratio}',data[i].ratio).replace('{ratio}', data[i].ratio).replace('{color}', getSparklineColor(coloroption)) + '<br/>'
        $("#" + squestionid + "_" + ssurveyid).append(body)
    }
	//$("#" + squestionid + "_" + ssurveyid).append("</div>")
    //$("#" + squestionid + "_" + ssurveyid).append('<script>getStatistics(' + data.data[0].questionid + ',' + data.data[0].surveyid + ') <\/script>')
}