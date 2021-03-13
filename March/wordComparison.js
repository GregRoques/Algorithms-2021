// ======================================================================== 3) do two words have the same number of vowels

const firstWord = "meat";
const secondWord = "bean";

function newCount(word, search) {
  const re = new RegExp(search, "g");
  const removeVowel = word.replace(re, "");
  return word.length - removeVowel.length;
} // need to update version of node... this one does not recognize .replaceAll(search, "")

function compareVowels(first, second) {
  const vowelArr_LowerCase = ["a", "e", "i", "o", "u", "y"];
  const word1_lc = first.toLowerCase();
  const word2_lc = second.toLowerCase();

  for (let i = 0; i < vowelArr_LowerCase.length; i++) {
    if (
      (word1_lc.includes(vowelArr_LowerCase[i]) &&
        !word2_lc.includes(vowelArr_LowerCase[i])) ||
      (!word1_lc.includes(vowelArr_LowerCase[i]) &&
        word2_lc.includes(vowelArr_LowerCase[i]))
    ) {
      return false;
    }

    if (
      word1_lc.includes(vowelArr_LowerCase[i]) &&
      word2_lc.includes(vowelArr_LowerCase[i])
    ) {
      if (
        newCount(word1_lc, vowelArr_LowerCase[i]) !==
        newCount(word2_lc, vowelArr_LowerCase[i])
      ) {
        return false;
      }
    }
  } // "return" does not end "map" loop... hence the "for" statement
  return true;
}

console.log(
  `Do "${firstWord}" and "${secondWord}" have the same number of vowels? ${compareVowels(
    firstWord,
    secondWord
  )}`
);