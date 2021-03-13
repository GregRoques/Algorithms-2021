function urlify(string) {
    const trimmedString = string.trim().toLowerCase();
    // const urlString = trimmedString.replaceAll(" ", "%20"); // because I need to upgrade node.js
    const replace = new RegExp(" ", "g");
    const urlString = trimmedString.replace(replace, "%20");
    return urlString;
  }
  
  console.log(urlify("Mr and Mrs Smith"));