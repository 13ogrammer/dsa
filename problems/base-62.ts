// Base64 encoding and decoding functions

const ALPHABET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const BASE = ALPHABET.length; // 62

function encode(num: number): string {
  if (num === 0) return ALPHABET[0];

  let str = "";
  while (num > 0) {
    str = ALPHABET[num % BASE] + str;
    num = Math.floor(num / BASE);
  }

  return str;
}

function decode(str: string): number {
  let num = 0;
  for (let char of str) {
    num = num * BASE + ALPHABET.indexOf(char);
  }

  return num;
}

console.log("Running tests...");
console.log("-------------------");

console.assert(encode(0) == "0", "encode 0");
console.assert(encode(1000) == "G8", "encode 1000");
console.assert(decode("0") == 0, "decode 0");
console.assert(decode("G8") == 1000, "decode G8");

console.log("-------------------");
console.log("Testing complete.");

export default {
  encode,
  decode,
};
