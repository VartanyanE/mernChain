// SPDX-License-Identifier: CPL-1.0

pragma solidity >=0.4.16 <0.9.0;

contract FirstContract {
    
    address public manager;
    address[] public players;
    
    
    constructor() public {
        manager= msg.sender;
    }
    
    function enter() public payable {
        players.push(msg.sender);
    
}

}