library Definitions{

    /* Define a request that machines will be posting to Connection. */
    struct Request{
        uint operationId;
        address sender;
    }

    function createRequest(uint operationId, address sender) returns (Request){
        return Request(operationId,sender);
    }

    /* which machines exist? */
    enum MachineTypes { Drone, Car }

    /* Defined a machine */
    /*struct Machine{
        MachineTypes type;
        uint[] operations;
    }*/
}