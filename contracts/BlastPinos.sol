// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import {ERC721A} from "erc721a/contracts/ERC721A.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

error SaleNotActive();
error MaxSupplyReached();
error InsufficientPayment();
error MaxMintPerTransactionExceeded();

contract BlastPinosNFT is ERC721A, Ownable {
    uint256 public constant MAX_SUPPLY = 9999;
    uint256 public constant MAX_PER_TRANSACTION = 10;
    uint256 public constant PRICE = 0.005 ether;

    bool public saleIsActive = false;
    string public baseURI;

    constructor(/*address initialOwner) Ownable(initialOwner*/) Ownable(msg.sender) ERC721A("Blast Pinos", "Pinos") {
    }

     function mint(uint256 quantity) external payable {
       if (!saleIsActive) revert SaleNotActive();
       if (_totalMinted() + quantity >= MAX_SUPPLY) revert MaxSupplyReached();
       if (quantity > MAX_PER_TRANSACTION) revert MaxMintPerTransactionExceeded();

       uint256 payAmount = quantity;
       uint256 freeMintCount = _getAux(msg.sender);

       if (freeMintCount < 1) {
            payAmount = quantity - 1;
            _setAux(msg.sender, 1);
       }
       
       if (payAmount > 0) {
            if (msg.value < payAmount * PRICE) revert InsufficientPayment();
        }

        _mint(msg.sender, quantity);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory uri) external onlyOwner {
        baseURI = uri;
    }

    function toggleSale() public onlyOwner {
        saleIsActive = !saleIsActive;
    }

    function withdraw() external onlyOwner {
        (bool firstSendSuccess, ) = payable(0x90A7ef5fc0256fF290d36cA99286857260086da0).call{
            value: address(this).balance
        }("");
        require(firstSendSuccess);
    }
}