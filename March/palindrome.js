const isPalindrome = "racecar";
const inverse = isPalindrome.split("").reverse().join("");
console.log(`Is "${isPalindrome}" a palindrom? ${isPalindrome === inverse}`);