// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    if(!encode){
      let counter = 0;
      for(let i = 0; i<input.length; i++){
          if(input[i] != ' '){
              counter += 1;
              //console.log(counter);
          }
      }
      if(counter % 2 != 0){
        return false;
      }
      const decoder = 
      { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', 
      '42': '(i/j)', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q',
      '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', 
      '55': 'z'}
      return input
      .match(/[0-9]{2}|[A-Z]|[a-z]|\s/g)
      .map(character => decoder[character] || character)
      .join('');

    }
    else{
      const encoder = 
      { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 
      'i': '42', 'j': '42','k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 
      'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55', 
      'A': '11', 'B': '21', 'C': '31', 'D': '41', 'E': '51', 'F': '12', 'G': '22', 'H': '32', 
      'I': '42','J': '42', 'K': '52', 'L': '13', 'M': '23', 'N': '33', 'O': '43', 'P': '53', 'Q': '14', 
      'R': '24', 'S': '34', 'T': '44', 'U': '54', 'V': '15', 'W': '25', 'X': '35', 'Y': '45', 'Z': '55', };
      const output = input
      .match(/[0-9]{2}|[A-Z]|[a-z]|\s/g)
      .map(character => encoder[character] || character)
      .join('');
      
      let counter = 0;
      for(let i = 0; i<output.length; i++){
          if(output[i] != ' '){
              counter += 1;
              //console.log(counter);
          }
      }
      if(counter % 2 != 0){
        return false;
      }
      return output;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
