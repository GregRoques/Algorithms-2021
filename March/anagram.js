const word1 = "Interpol";
const word2 = "El Pintor";

const word1_edit = word1.toLowerCase().split("").sort().join("").trim();
const word2_edit = word2.toLowerCase().split("").sort().join("").trim();

console.log(
  `Are "${word1}" and "${word2}" anagrams of each other? ${
    word1_edit === word2_edit
  }`
);