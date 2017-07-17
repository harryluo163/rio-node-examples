/**
 * Created by luojian4 on 2017/7/17.
 */
/**
 * Created by luojian4 on 2017/7/17.
 */
var rio = require("rio");
rio.enableDebug(true);//开启调试模式
rio.e({
    command: "rnorm(20)",
    host : "127.0.0.1",//服务器IP地址
    port : 6311,
});
