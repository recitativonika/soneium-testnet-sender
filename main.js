const _0x1eb7a7=_0x35b5;(function(_0x3cf6fe,_0x158af3){const _0x18a6c1=_0x35b5,_0x294c44=_0x3cf6fe();while(!![]){try{const _0x377722=parseInt(_0x18a6c1(0x147))/0x1*(-parseInt(_0x18a6c1(0x137))/0x2)+-parseInt(_0x18a6c1(0x13a))/0x3+-parseInt(_0x18a6c1(0x152))/0x4+parseInt(_0x18a6c1(0x136))/0x5*(parseInt(_0x18a6c1(0x14c))/0x6)+parseInt(_0x18a6c1(0x13b))/0x7*(-parseInt(_0x18a6c1(0x140))/0x8)+-parseInt(_0x18a6c1(0x145))/0x9*(-parseInt(_0x18a6c1(0x15b))/0xa)+parseInt(_0x18a6c1(0x150))/0xb;if(_0x377722===_0x158af3)break;else _0x294c44['push'](_0x294c44['shift']());}catch(_0x3798c0){_0x294c44['push'](_0x294c44['shift']());}}}(_0x7934,0x96f14));const {Web3}=require(_0x1eb7a7(0x15a)),config=require('./config/config'),web3=new Web3(new Web3[(_0x1eb7a7(0x158))][(_0x1eb7a7(0x139))](config[_0x1eb7a7(0x14f)]));function getRandomBalance(){const _0x100662=_0x1eb7a7,_0x19c551=(Math[_0x100662(0x142)]()*(config[_0x100662(0x14b)]-config['BALANCE_MIN'])+config[_0x100662(0x153)])[_0x100662(0x13d)](0x5);return _0x19c551;}function _0x35b5(_0x330ba9,_0x2d251e){const _0x7934b5=_0x7934();return _0x35b5=function(_0x35b59d,_0x191794){_0x35b59d=_0x35b59d-0x136;let _0x28af85=_0x7934b5[_0x35b59d];return _0x28af85;},_0x35b5(_0x330ba9,_0x2d251e);}function getRandomInterval(){const _0x13c97c=_0x1eb7a7;return Math[_0x13c97c(0x15e)](Math[_0x13c97c(0x142)]()*(config[_0x13c97c(0x157)]-config[_0x13c97c(0x14a)]+0x1))+config['INTERVAL_MIN'];}async function sendRandomBalance(_0x4a0e8c,_0x2b231b){const _0x179006=_0x1eb7a7;try{const _0x5e8f88=getRandomBalance(),_0x5423a=web3[_0x179006(0x146)][_0x179006(0x154)](_0x5e8f88,'ether'),_0xd854b9=await web3[_0x179006(0x159)][_0x179006(0x151)](_0x4a0e8c,_0x179006(0x156)),_0x3ac10b={'to':_0x4a0e8c,'value':_0x5423a,'gas':0x5208,'gasPrice':web3['utils'][_0x179006(0x154)](_0x179006(0x138),'gwei'),'nonce':_0xd854b9},_0x2ff9ba=await web3[_0x179006(0x159)][_0x179006(0x14e)][_0x179006(0x144)](_0x3ac10b,_0x2b231b),_0x1cec9d=await web3[_0x179006(0x159)][_0x179006(0x141)](_0x2ff9ba['rawTransaction']);console[_0x179006(0x143)]('Transaction\x20sent!\x20Amount:\x20'+_0x5e8f88+_0x179006(0x149)+_0x1cec9d[_0x179006(0x14d)]);}catch(_0x5c02b9){console[_0x179006(0x148)](_0x179006(0x13f),_0x5c02b9);}}async function main(){const _0x483db1=_0x1eb7a7,_0x4f26c0=config[_0x483db1(0x13c)],_0x1dd3d9=config['PRIVATE_KEY'];console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)]('==========================================='),console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)](_0x483db1(0x15c)),console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)](_0x483db1(0x13e)),console[_0x483db1(0x143)]('\x20'),console[_0x483db1(0x143)]('\x20');while(!![]){await sendRandomBalance(_0x4f26c0,_0x1dd3d9);const _0x2e33bd=getRandomInterval();console[_0x483db1(0x143)](_0x483db1(0x15d)+_0x2e33bd/0x3e8+_0x483db1(0x155)),await new Promise(_0x5a64d7=>setTimeout(_0x5a64d7,_0x2e33bd));}}function _0x7934(){const _0x3c2b34=['Waiting\x20for\x20','floor','635LDnVlu','136PiWbDr','0.5','HttpProvider','139461CgEnqw','27993FCOPMW','WALLET_ADDRESS','toFixed','===========================================','Error\x20sending\x20transaction:','1512coDSJH','sendSignedTransaction','random','log','signTransaction','3447rWKvoH','utils','13711PEkeuN','error','\x20ETH,\x20Hash:\x20','INTERVAL_MIN','BALANCE_MAX','17196xKPPAv','transactionHash','accounts','ETH_NODE','12600236XmDoNm','getTransactionCount','479188sbxDZd','BALANCE_MIN','toWei','\x20seconds\x20before\x20the\x20next\x20transaction...','latest','INTERVAL_MAX','providers','eth','web3','25150dExZnl','Made\x20by\x20https://github.com/recitativonika'];_0x7934=function(){return _0x3c2b34;};return _0x7934();}main();