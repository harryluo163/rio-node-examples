/**
 * Created by luojian4 on 2017/7/17.
 */
/**
 * Created by luojian4 on 2017/7/17.
 */
var rio = require("rio");
var path = require("path");


function displayResponse(err, res) {

    if (!err) {
        res = JSON.parse(res);
        console.log(unescape(res.hello)); // Hello 'world'!
    } else {
        console.log(err, "Rserve call failed");
    }
}

rio.e({
    filename: path.join(__dirname, "../routes/dump/4.R"),
    entrypoint: "run",
    data: {
        "hello": escape("Hello 'world'!")
    },
    callback: displayResponse
});


