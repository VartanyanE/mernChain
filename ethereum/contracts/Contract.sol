// SPDX-License-Identifier: CPL-1.0

pragma solidity 0.8.4;

contract Contract {
    string public message;
    
    constructor (string memory initialMessage) {
        message = initialMessage;
    }
    
    function setMessage (string calldata newMessage) public {
        message = newMessage;
    }
}