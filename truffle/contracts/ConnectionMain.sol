
library Definitions{

    /* Define a request that machines will be posting to Connection. */
    struct Request{
        uint operationId;
        address sender;
    }

    /* which machines exist? */
    enum MachineTypes { Drone, Car }

    /* Defined a machine */
    /*struct Machine{
        MachineTypes type;
        uint[] operations;
    }*/
}

contract ConnectionMain {


    /* Define variables to be used in this contract. */
    Definitions.Request []requests; 
    uint numRequests;
    event newRequestPublished(address sender, uint operationId);

    /**
        Constructor of this contract.
    */
    function Connection(){
        numRequests = 0;
    }

    /**
        Publishes a new request to be processed by Connection.
    */
    function publishRequest(uint operationId) returns (uint requestId){
        requestId = numRequests++;
        requests[requestId] = Definitions.Request(operationId,msg.sender);
        newRequestPublished(msg.sender, operationId);
    }




}