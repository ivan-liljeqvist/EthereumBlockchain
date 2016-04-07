contract MetaCoin {

    uint numberOfTransactions;
	mapping (address => uint) balances;

	function MetaCoin() {
		balances[tx.origin] = 10000;
        numberOfTransactions=0;
	}

	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
        numberOfTransactions+=1;
		return true;
	}

    function getNumberOfTransactions() returns(uint){
        return numberOfTransactions;
    }

  function getBalance(address addr) returns(uint) {
    return balances[addr];
  }
}
