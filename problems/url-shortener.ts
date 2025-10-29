import Base62 from "./base-62";

function urlShortener(url: string): string {
  // store the url in the database table and get the unique id
  const uniqueId = scramble(100_000);

  // encode the unique id to get the short code
  const shortCode = Base62.encode(uniqueId);
  return shortCode;
}

function scramble(id: number): number {
  // A simple scrambling function (for demonstration purposes)
  const P = 12582917; // prime
  const M = 2147483647; // large prime
  return (id * P * 13) % M;
}

console.log("Running tests...");
console.log("-------------------");

console.assert(
  urlShortener("https://www.example.com") === "1",
  urlShortener("https://www.example.com")
);

console.log("-------------------");
console.log("Testing complete.");
