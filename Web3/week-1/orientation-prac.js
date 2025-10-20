//todo Assignment - 1

// const crypto = require("crypto");

// const findHashWithPrefix = (prefix) => {
//     let input = 0;
//     while(true) {
//         let inputStr = input.toString();
//         let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
//         if(hash.startsWith(prefix)) {
//             return {number: inputStr, hash: hash}
//         }
//         input++;
//     }
// };

// let ans = findHashWithPrefix("00000");
// console.log(ans.number);
// console.log(ans.hash);

//todo Assignment - 2

// const crypto = require('crypto');

// Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while(true) {
//         let inputStr = '100xdevs' + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if(hash.startsWith(prefix)) {
//             return {inputStr: inputStr, input: input, hash: hash}
//         }
//         input++;
//     }
// }

// const ans = findHashWithPrefix('00000');
// console.log(`Nonce: ${ans.input}`)
// console.log(`Input: ${ans.inputStr}`)
// console.log(`Hash: ${ans.hash}`)

//todo Assignment - 3

