/**
 * Created by luojian4 on 2017/7/17.
 */
var rio = require("rio");

exports.rio = function(req, res){
    options = {
        host : "127.0.0.1",
        port : 6311,
        callback: function (err, val) {
            if (!err) {
                console.log("RETURN:"+val);
                return res.send({'success':true,'res':val});
            } else {
                console.log("ERROR:Rserve call failed")
                return res.send({'success':false});
            }
        },
    }
    rio.enableDebug(true);//开启调试模式
    rio.evaluate("pi / 2 * 2 * 2",options);//运行R代码
};