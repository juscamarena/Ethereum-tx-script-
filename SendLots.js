
sendLots = function() {
  loops = 1000;
  txcount = 2;
  waitBlocks = 1;
  fromAccount = eth.accounts[0];

  i = 0;
  do {
    i++;
    j = 0;
    do {
      j++;
      // customize the transaction here
    
      wei = 133700000000000 + j  + i* 92;

      g = 1;

        do {
           toAccount = eth.accounts[g];
           tx = eth.sendTransaction({from: fromAccount, to: toAccount, value: wei, gas: "2000000", gasPrice: "2000000"});
           console.log("tx"+j+": "+tx+" for "+wei+" wei");
           g++;
        }while(g < 6)
    } while (j < txcount)
    if (i != loops) {
      console.log(i+": Waiting "+waitBlocks+" block for "+(eth.blockNumber+waitBlocks));
      admin.debug.waitForBlocks(eth.blockNumber-1+waitBlocks); // This seems off
    }
    else {
      console.log(i+": Next block is "+(eth.blockNumber+waitBlocks)+"... wait for it :)")
    }
  } while (i < loops);
  return
}