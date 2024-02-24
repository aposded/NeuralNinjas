// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract GettingStartedFunctionsConsumer is FunctionsClient, ConfirmedOwner,ERC721URIStorage {
    using FunctionsRequest for FunctionsRequest.Request;

    bytes32 public s_lastRequestId;
    bytes public s_lastResponse;
    bytes public s_lastError;

    error UnexpectedRequestID(bytes32 requestId);

    event Response(
        bytes32 indexed requestId,
        string evaluation,
        bytes response,
        bytes err
    );


//Using chainlink functions to access world bank api data and evaluate the student score
    string sources =
    "const income = parseInt(args[1]);"
    "const expenses = parseInt(args[2]);"
    "const assets = parseInt(args[3]);"
    "const liabilities = parseInt(args[4]);"
    "const merit = parseInt(args[5]);"
    "const need = parseInt(args[6]);"
    "const countrytick = args[0];"
    
    
    "const apiResponse = await Functions.makeHttpRequest({'url': `https://api.worldbank.org/v2/country/${countrytick}/indicator/NY.GDP.PCAP.CD?format=json&date=2020`});"
    "const {data } = apiResponse;"

    "var numericValue = parseInt(data[1][0].value);"
    
    
    "var weights = [5, -5, -0.5, 0.5, 5,5];"
    "var weighted_score = (5 * expenses + -5 * income + -0.5 * assets + 0.5 * liabilities, 5 * merit,  5 * need);"
    "return Functions.encodeString(parseInt(weighted_score.toString()));"

    
    ;
    using Strings for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping(uint256 => uint256) public tokenIdToLevels;



    address router = 0x6E2dc0F9DB014aE19888F539E59285D2Ea04244C;
    uint32 gasLimit = 300000;
    bytes32 donID =
        0x66756e2d706f6c79676f6e2d6d756d6261692d31000000000000000000000000;

    string public evaluation;

    constructor() FunctionsClient(router) ConfirmedOwner(msg.sender) ERC721("EDULINK", "EDULINK") {
    }

    function sendRequest(
        uint64 subscriptionId,
        string[] calldata args

    ) external onlyOwner returns (bytes32 requestId) {
        FunctionsRequest.Request memory req;
        req.initializeRequestForInlineJavaScript(sources);
        if (args.length > 0) req.setArgs(args);

        s_lastRequestId = _sendRequest(
            req.encodeCBOR(),
            subscriptionId,
            gasLimit,
            donID
        );

        return s_lastRequestId;
    }

    

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        if (s_lastRequestId != requestId) {
            revert UnexpectedRequestID(requestId);
        }


        s_lastResponse = response;
        evaluation = string(response);
        s_lastError = err;
        
        
    
//Mint the erc721 nft for the user

       _tokenIds.increment();
       uint256 newItemId = _tokenIds.current();
       _safeMint(msg.sender, newItemId);
      
       
        

        emit Response(requestId, evaluation, s_lastResponse, s_lastError);
    }

    

}
