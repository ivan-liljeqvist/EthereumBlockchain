var bootstrapService = require("express-bootstrap-service");
var express = require('express');
var Web3 = require('web3');
var web3 = new Web3();


var app = express();

var SimpleStorage = [

    {
        "name":"set",
        "constant":false,
        "inputs":[{"name":"x","type":"uint256"}],
        "outputs":[],
        "type":"function"

    },
    {

        "name":"get",
        "constant":true,
        "inputs":[],
        "outputs":[{"name":"retVal","type":"uint256"}],
        "type":"function"

    }

];


 
app.use(bootstrapService.serve);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);

    afterServerStarted();
    
});

function afterServerStarted(){

    console.log("Server started, do ETHERUM STUFFF");




    web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

    var storageContract = web3.eth.contract("0x53551DDcB5d1BDF285371B6351aB70F58332D13c",SimpleStorage);

    console.log("balance:");
    
    var coinbase = web3.eth.coinbase;
     var originalBalance = web3.eth.getBalance(coinbase).toNumber();

    console.log(originalBalance);

    //console.log(storageContract);

    //storageContract.set(10);

}





