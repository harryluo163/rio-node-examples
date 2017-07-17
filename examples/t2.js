/**
 * Created by luojian4 on 2017/7/17.
 */
var rio = require("rio");
var path = require("path");

var r_file_command =  path.join(__dirname, "../routes/dump/uniqueSort.R");
var args = {"test": [1,4,4,1,1,0,0,1,1,1,1,0,1,0,2,0,1,1,2,0,0,3,2]};

function displayResponse(err, res) {
    if (!err) {
        res = JSON.parse(res);
        console.log("result is " + res.test);
    } else {
        console.log("Optimization failed");
    }
}

//rio.enableDebug(true);//开启调试模式

rio.e({
    filename: r_file_command,//加载R源
    entrypoint: "uniqueSort",//R中的函数
    data: args,//Nodejs传入R的参数
    callback: displayResponse

});