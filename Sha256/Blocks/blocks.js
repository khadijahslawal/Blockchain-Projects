const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  generateHash() {
    // Use this to create a temporary reference of the class object
    let self = this;
    //Implement your code here
    const hash = SHA256(JSON.stringify(self));
    var promise = new Promise((resolve, reject) => {
        if (hash) {
            resolve({ hash: hash });
        } else {
            reject(new Error('fuck'));
        }
    });

    return promise;
  }
}

// Exporting the class Block to be reuse in other files
module.exports.Block = Block;
