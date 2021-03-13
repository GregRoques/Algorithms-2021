// ======================================================================== 4) count vowels

const countVowels = (string) => {
    const findVowelsRegEx = new RegExp(/[aeiouy]/, "g");
    const matched = string.toLowerCase().match(findVowelsRegEx);
    return matched ? matched.length : 0;
  };
  
  const countWord = "Andele andele mami, E I E I Uh-oh! What's poppin' tonite? ";
  console.log(`Vowel Count = ${countVowels(countWord)}`);
  
  // tHIS WORKS BETTER FOR QUESTION 3...
  
  const vowelDoOver1 = "meat";
  const vowelDoOver2 = "bean";
  
  console.log(
    `THIS IS MORE EFFICIENT: Do "${vowelDoOver1}" and "${vowelDoOver2}" have the same number of vowels? ${
      countVowels(vowelDoOver1) === countVowels(vowelDoOver2)
    }`
  );