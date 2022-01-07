// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


  function substitution(input, alphabet, encode = true) {

    if(!alphabet){
        return false;
    }
    //----------------------------------------------------------------------------------------------------------
        //Implementing reduce method to ensure there are no duplicate letters in alphabet...
    //----------------------------------------------------------------------------------------------------------    
    const alphabetArray = alphabet.split('');
    const counts = alphabetArray.reduce((counts, letters) => {
        counts[letters] = (counts[letters] || 0) + 1;
        return counts ;
        }, {});
    //console.log(counts);
    //console.log("ARRAY", alphabetArray.length)
    const values = Object.values(counts);
    //console.log(values.length);
    //console.log("Counts", counts.length);
    if(alphabet.length != 26 || values.length != 26){
        return false;
    }
    //----------------------------------------------------------------------------------------------------------
        //String variable to be returned
    //----------------------------------------------------------------------------------------------------------
        let string = "";
    
        
    //----------------------------------------------------------------------------------------------------------
        //Created standard version of alphabet for indexing positions
    //----------------------------------------------------------------------------------------------------------
        const engAlphabet = 'abcdefghijklmnopqrstuvwxyz '.split('');
    
    //----------------------------------------------------------------------------------------------------------
        //Input must be lowercase according to specifications
    //----------------------------------------------------------------------------------------------------------
        let lowerCaseLetter = input.toLowerCase();
    
    //----------------------------------------------------------------------------------------------------------
        //If encode parameter is not specified as false
    //----------------------------------------------------------------------------------------------------------
        if(encode){

            let engAlphabetIndexArray = []
            for(let i = 0; i < input.length; i++){
                let inputLetter = lowerCaseLetter[i];
                for(let j = 0; j <engAlphabet.length; j++){
                    if(inputLetter === engAlphabet[j]){
                        engAlphabetIndexArray.push(j)
                    }
                }
            }
            //console.log(engAlphabetIndexArray);
            for(let i = 0; i < engAlphabetIndexArray.length; i++){
                let index = engAlphabetIndexArray[i]
                if (index === 26){
                    string += ' '
                }
                for(let j = 0; j < alphabet.length; j++){
                    if (index ===j){
                        index= alphabet[j];
                        string += index;
                    }
                }
            }
        }
    //----------------------------------------------------------------------------------------------------------
        //If encode is specified as false...
    //----------------------------------------------------------------------------------------------------------
        else {
            let alphabetIndexArray = []
            for(let i = 0; i < input.length; i++){
                let inputLetter = input[i];
                if(inputLetter === ' '){
                    alphabetIndexArray.push(' ');
                }
                let lowerCaseLetter = inputLetter.toLowerCase();
                for(let j = 0; j <alphabet.length; j++){
                    if(lowerCaseLetter === alphabet[j]){
                        alphabetIndexArray.push(j)
                    }  
    
                }
            }
            for(let i = 0; i < alphabetIndexArray.length; i++){
                let index = alphabetIndexArray[i]
                if(alphabetIndexArray[i] === ' '){
                    string += ' ';
                }
                for(let j = 0; j < engAlphabet.length; j++){
                    if (index ===j){
                        string += engAlphabet[j];
                    }
                }
            }
        }
        return string; 
    }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
