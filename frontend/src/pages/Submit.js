import React,{useContext,useEffect,useState} from 'react'
import UserContext from '../contexts/UserContext'
import {useNavigate} from 'react-router-dom'
import Subheading from '../components/Text/Subheading'
import Text from '../components/Text/Text'
import ButtonPrimary from '../components/Buttons/ButtonPrimary'
import Icon from '../components/Text/Icon'
import Navbar from '../components/Nav/Navbar'
import Logobar from '../components/Nav/Logobar'
import axios from 'axios'
import usePdfParser from '../hooks/usePdfParser'
import ErrorContext from '../contexts/ErrorContext'
import {Contract,BrowserProvider} from 'ethers'


export default function Submit() {
    const [account]=useContext(UserContext)
    const [files,setFiles]=useState([])
    const key=process.env.REACT_APP_OPENAI_KEY
    const parseText=usePdfParser()
    const [texts,setTexts]=useState([])
    const [parameters,setParameters]=useState([1,1,1,1,1,1])
    const [setError]=useContext(ErrorContext)
    const navigate=useNavigate()

    const getParametersFromText=async (texts) => {
        texts=[]
        for(let file of files) {
            await parseText(file,setTexts)
        }
    }

    useEffect(() => {
        const f=async () => {
            console.log("texts",key,process.env.REACT_APP_OPENAI_KEY)
            if(texts.length===files.length&&texts.length>0) {
                const openAIRequest=axios({
                    url: "https://api.openai.com/v1/chat/completions",
                    method: "POST",
                    headers: {
                        'Authorization': `Bearer ${key}`
                    },
                    data: {
                        "model": "gpt-3.5-turbo","messages": [{
                            "role": "user","content": "You are a helpful assistant. Your job is to process text parsed from pdf documents of students applying for scholarships. You should assign values to each of the following categories according to the data given below: income, expenses, assets, liabilities, merit (/100), and need (/100). If you have no data about a value, respond with -1. Respond in solely the values requested comma-seperated. Sicnce the data will be parsed, include only the comma-seperated values. Here is the texts: "+texts+"!"
                        }]
                    }
                })

                const [openAiResponse]=await Promise.all([
                    openAIRequest
                ])
                setTexts([])
                setParameters(openAiResponse.data.choices[0].message.content.split(', ').join(',').split(','))
                console.log("raw response",openAiResponse.data.choices[0].message.content)
                console.log("raw response",parameters)
                for(let i=0;i<parameters.length;i++) {
                    if(parameters[i]==='-1') {
                        setError('One or more of the parameters could not be determined. Please try again.')
                        return
                    }
                }
                handleSmartContract()
            }
        }
        f()
    }
        ,[files,texts])

    const handleSmartContract=async () => {
        const address="0x4B52fd1a05b0F71b8B5dFA2F6E05A4C2E17dC4E3"
        const abi=[
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "ERC721IncorrectOwner",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ERC721InsufficientApproval",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "approver",
                        "type": "address"
                    }
                ],
                "name": "ERC721InvalidApprover",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "ERC721InvalidOperator",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "ERC721InvalidOwner",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "receiver",
                        "type": "address"
                    }
                ],
                "name": "ERC721InvalidReceiver",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "ERC721InvalidSender",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ERC721NonexistentToken",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "EmptyArgs",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "EmptySource",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "NoInlineSecrets",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OnlyRouterCanFulfill",
                "type": "error"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    }
                ],
                "name": "UnexpectedRequestID",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferRequested",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "id",
                        "type": "bytes32"
                    }
                ],
                "name": "RequestFulfilled",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "id",
                        "type": "bytes32"
                    }
                ],
                "name": "RequestSent",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "character",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "response",
                        "type": "bytes"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "err",
                        "type": "bytes"
                    }
                ],
                "name": "Response",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "acceptOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "character",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "response",
                        "type": "bytes"
                    },
                    {
                        "internalType": "bytes",
                        "name": "err",
                        "type": "bytes"
                    }
                ],
                "name": "handleOracleFulfillment",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "s_lastError",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "s_lastRequestId",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "s_lastResponse",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint64",
                        "name": "subscriptionId",
                        "type": "uint64"
                    },
                    {
                        "internalType": "string[]",
                        "name": "args",
                        "type": "string[]"
                    }
                ],
                "name": "sendRequest",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "requestId",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
        const provider=new BrowserProvider(window.ethereum)
        const signer=await provider.getSigner();

        const contract=new Contract(address,abi,signer)
        contract.sendRequest('1361',['USA',...parameters.map(p => p.toString())])

        navigate('/loading')

        setTimeout(() => {
            navigate('/result')
        },10000)
    }

    function calculateScore() {
        let score=0
        const weights=[-0.3,+0.3,-0.1,+0.1,5,5]
        for(let i=4;i<6;i++) {
            score+=weights[i]*parameters[i]
        }
        return score
    }

    return (
        <>
            <Logobar />
            <div className='min-h-full px-8 mx-auto shadow-xl max-w-7xl bg-light'>
                <Subheading>Submit your application</Subheading>
                <Text className='py-0 mt-2 leading-none text-zinc-500'>Attach any files that might help our algorithm assess your financial situation. </Text>
                <Text className='text-zinc-500'>Requirement: Two years of your submitted tax forms.</Text>
                <div className='flex flex-col items-center justify-center gap-2 pt-16 mx-auto w-128'>
                    {!!files.length&&files.map(file => <div className='flex items-center justify-between w-full p-4 text-lg border rounded-md shadow-md text-primary border-primary bg-light bottom-4 '>{file.name}<Icon icon='x' onClick={() => setFiles(files => files.filter(f => f.name!==file.name))} className='text-2xl cursor-pointer' /></div>)}
                    <label htmlFor='upload-files' className='flex items-center justify-center w-full p-4 text-lg border border-dashed rounded-md shadow-md cursor-pointer text-primary border-primary bg-light bottom-4'>Add Files</label>
                    <input id='upload-files' className='h-0 opacity-0 pointer-events-none' type='file' multiple onChange={(e) => setFiles(files => {console.log(files); return [...files,...Array.from(e.target.files)]})} />
                    <ButtonPrimary className='!mt-0' onClick={() => {
                        if(files.length>0) {
                            handleSmartContract()
                        }
                    }}>Submit</ButtonPrimary>
                </div>
            </div>
        </>
    )
}