// Require file system access
fs = require("fs");
// Read file buffer 
imgReadBuffer = fs.readFileSync("monalisa.jpg");
// Encode image buffer to hex
imgHexEncode = Buffer.from(imgReadBuffer).toString('hex');
// Output encoded data to console
// console.log(imgHexEncode);
// Decode hex
var imgHexDecode = Buffer.from(imgHexEncode, "hex");
// Save decoded file file system 
fs.writeFileSync('deocdeImage.jpg', imgHexDecode);