/*//对数组进行排序
function compareAsc(property) {
    return (firstobj, secondobj) => {
        const firstValue = firstobj[property];
        const secondValue = secondobj[property];
        return firstValue - secondValue ; //升序
    };
}

//对数组进行排序
function compareDesc(property) {
    return (firstobj, secondobj) => {
        const firstValue = firstobj[property];
        const secondValue = secondobj[property];
        return secondValue - firstValue; //降序
    };
}*/

function BubbleSort(x,y){
    return x.order-y.order;
}

//获取在运行线路
function grepLine(lines) {

    var lineNum = $.grep(lines, function(n,i){
        return n.color!="#eaeaea" && n.color!="#EAEAEA"  && n.color != '#FFFFFF';
    });


    return lineNum.sort(BubbleSort);
}

function grepStation(stations) {
    return $.grep(stations, function(n,i){
        var id = n.id;
        /*if (id.indexOf("_")>-1){
            id = id.split('_')[1];
        }*/
        var eName = n.eName;
        if (eName!=null && eName!=""){
            var reg = new RegExp("/","g");
            eName = eName.replace(reg,"");
        }
        n.eName = eName;
        return n.type!="arc" && n.type!="hide";
    });
}

//根据线路ID获取线路信息
function grepLineByLineID(lines,lineID) {
    var lineNum = $.grep(lines, function(n,i){
        return n.id==lineID;
    });
    var filteredLineObjects = lineNum.map(function(line) {
        // 过滤station数组，移除type为'offline'的元素
        line.station = line.station.filter(function(station) {
            return station.type !== 'offline';
        });
        return line;
    });

    return filteredLineObjects.sort(BubbleSort);
}

//根据线路ID获取线路信息
function grepLineByLineName(lines,lineName) {
    var lineNum = $.grep(lines, function(n,i){
        return $.trim(n.name)==lineName;
    });

    // return BubbleSort(lineNum);
    // return lineNum.sort(compareAsc("order"));
    return lineNum.sort(BubbleSort);
}

function formatTime(time) {
    return time.substring(0, 5);
}
function splitEndTime(time) {
    var strArr=time.split("#");
    if(strArr[1]==undefined){
        return "——";
    }else{
        return strArr;
    }
}

function queryStationDetail(lines,lineName,stationName) {
    var line = $.grep(lines, function(n,i){
        return $.trim(n.name)==lineName;
    });

    var stationArray = [];
    for (var key in szmtr.stations){
        var reg = new RegExp("/","g");
        var name = $.trim(szmtr.stations[key].name);
        if (name.replace(reg,"").indexOf(stationName)>-1){
            stationArray.push(key);
        }
    }

    return $.grep(line[0].station, function(n,i){
        for (var key in stationArray) {
            if (n.id.indexOf(stationArray[key])>-1){
                return n;
            }
        }
    })[0];
}

function queryStationDetailByID(line,stationId) {
    return $.grep(line.station, function(n,i){
        if (n.id.indexOf(stationId)>-1){
            return n;
        }
    })[0];
}

function getLineByStationID(lines,stationId){
    var line=null;
    try {
        $.each(lines, function (index, value) {
            $.each(value.station, function (i, v) {
                var sId = v.id;
                /*if (sId.indexOf("_") > -1) {
                    sId = sId.split("_")[1];
                }*/
                if (sId == stationId) {
                    line = value;
                }
            });
        });
    } catch (e) {
    }
    return line;
}

function queryStationEndTime(stationArray,lineID,directionId) {
    var station = $.grep(stationArray, function(n,i){
        return $.trim(n.lineID)==lineID;
    })[0];

    var downDirectionID = station.Time.downDirectionID;
    if (downDirectionID.indexOf("_")>-1){
        downDirectionID = downDirectionID.split("_")[1];
    }
    if (downDirectionID==directionId){
        return station.Time.down_endtime;
    }

    var upDirectionID = station.Time.upDirectionID;
    if (upDirectionID.indexOf("_")>-1){
        upDirectionID = upDirectionID.split("_")[1];
    }
    if (upDirectionID==directionId){
        return station.Time.up_endtime;
    }
}

function queryStationStartTime(stationArray,lineID,directionId) {
    var station = $.grep(stationArray, function(n,i){
        return $.trim(n.lineID)==lineID;
    })[0];

    var downDirectionID = station.Time.downDirectionID;
    if (downDirectionID.indexOf("_")>-1){
        downDirectionID = downDirectionID.split("_")[1];
    }
    if (downDirectionID==directionId){
        return station.Time.down_begintime;
    }
    var upDirectionID = station.Time.upDirectionID;
    if (upDirectionID.indexOf("_")>-1){
        upDirectionID = upDirectionID.split("_")[1];
    }
    if (upDirectionID==directionId){
        return station.Time.up_begintime;
    }
}

//获取在运行线路
function BubbleSvgOrder(x,y){
    return x.svgOrder-y.svgOrder;
}

function findStationById(data,stationId) {
    var station=null;
    try {
        $.each(data.line, function (index, value) {
            $.each(value.station, function (i, v) {
                var sId = v.id;
                if (sId.indexOf("_") > -1) {
                   sId = sId.split("_")[1];
                }
                if (sId == stationId) {
                    station = v;
                    station.name = getStationNameById(data,v.id);
                }

            });
        });
    } catch (e) {
    }
    return station;
}

function getStationNameById(data,stationId) {
    var stationName = data.stations[stationId].name;
    return stationName.indexOf("_")?stationName.replace('/',''):stationName;
}
