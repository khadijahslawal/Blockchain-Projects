const SHA256 = require('crypto-js/sha256');

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/
class Block {
    constructor(data){
        this.hash = "",
        this.height = 0,
        this.body = data,
        this.time = 0,
        this.previousblockhash = "0X"
    }
}

class Blockchain {
    constructor(){
        this.chain = [];
        this.addBlock(new Block("First Block in the chain - Genesis Block"));
    }

    addBlock(newBlock){
        newBlock.height = this.chain.length;
        newBlock.time = new Date().getTime().toString().slice(0, -3);
        if (this.chain.length>0) {
            // previous block hash
            newBlock.previousblockhash = this.chain[this.chain.length-1].hash;
          }
          // SHA256 requires a string of data
          newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
          // add block to chain
          this.chain.push(newBlock);
        }
}