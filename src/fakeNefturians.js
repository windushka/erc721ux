import React, { useEffect, useState } from "react";
import './FakeNefturians/FakeNefturians';

import { ethers } from 'ethers';

const contractAdresse="0x14e68d0ba29c07478bd68f4a479a0211bd48ca4e";
const abi = require('./FakeNefturians/FakeNefturians.json').abi;
const { BigNumber } = require('ethers')
const Web3 = require('web3');

var tokenprice = 0;
let web3 = new Web3('wss://rinkeby.infura.io/ws/v3/6f0414eda8234413b03a994f0e7413b1');


const contract = new web3.eth.Contract(abi, contractAdresse);


function FakeNetfurians(){
    

    const [tokenname,setName]= useState("");
    const [tokensupply,setSupply]=useState(0);
    const [tokenPrice,setPrice]=useState(0);
    useEffect(async () => {
        setName((await contract.methods.name().call()));
        setSupply(( await contract.methods.totalSupply().call()))
        setPrice(( await contract.methods.tokenPrice().call()))
           
    });
    
    const mintNftHandler = () => { 
        try {
            const { ethereum } = window;
      
            if (ethereum) {
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const Contract = new ethers.Contract(contractAdresse, abi, signer);
  
              
              var nb2=Number(tokenPrice)+Number("109303802233");
              
              var chaine2=nb2.toString();

              console.log(typeof chaine2,chaine2);
              console.log("Done");
              let token = Contract.buyAToken({ value: BigNumber.from(chaine2)});
    
      
            } else {
              console.log("Error token does not exist");
            }
      
          } catch (err) {
            console.log(err);
          }
    }


    const mintNftButton = () => {
    return (
        <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
            Buy
        </button>
    )
    }

    useEffect(() => {
    }, [])


 
  return (
    <div>
      <header>
        <br></br>
        <br></br>
      </header>
      <br></br>
      <h1>fakeNefturians</h1>
      <div>
            <p>Name of the token : {tokenname}</p>
            <p>TotalSupply : {tokensupply} </p>
            <p>The minimum token price : {tokenPrice} wei</p>
           
        </div>
        <br></br>
        <h1>Buy token</h1>
        <div>
          {mintNftButton()}
      </div>
    </div>
  );
  }
  
  export default FakeNetfurians;