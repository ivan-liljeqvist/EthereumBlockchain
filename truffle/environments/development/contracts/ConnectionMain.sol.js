"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var ConnectionMain = (function (_Pudding) {
    _inherits(ConnectionMain, _Pudding);

    function ConnectionMain() {
      _classCallCheck(this, ConnectionMain);

      _get(Object.getPrototypeOf(ConnectionMain.prototype), "constructor", this).apply(this, arguments);
    }

    return ConnectionMain;
  })(Pudding);

  ;

  // Set up specific data for this class.
  ConnectionMain.abi = [{ "constant": false, "inputs": [{ "name": "operationId", "type": "uint256" }], "name": "publishRequest", "outputs": [{ "name": "requestId", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [], "name": "Connection", "outputs": [], "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "operationId", "type": "uint256" }], "name": "newRequestPublished", "type": "event" }];
  ConnectionMain.binary = "606060405261011d806100126000396000f3606060405260e060020a6000350463b245d5478114610026578063bfba4576146100fd575b005b6101076004356001805480820190915560a06040526060828152336080526000805483908110156100025790600052602060002090600202016000506000820151816000016000505560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055509050507fbc5419283af810f4243fab452498aa8c589683702816e102bc92cfbd2f1352583383604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a1919050565b6100246000600155565b6040518082815260200191505060405180910390f3";

  if ("" != "") {
    ConnectionMain.address = "";

    // Backward compatibility; Deprecated.
    ConnectionMain.deployed_address = "";
  }

  ConnectionMain.generated_with = "1.0.3";
  ConnectionMain.contract_name = "ConnectionMain";

  return ConnectionMain;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.ConnectionMain = factory;
}