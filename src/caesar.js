// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    let html = '';
    if(encode){
        if(!shift || shift ===0){
            return false;
          }
          else if(shift > 25 || shift < -25){
            return false;
          }
          else{
            const lowerCase = input.toLowerCase();
            for(let i = 0; i < input.length; i++){
              let code = lowerCase.charCodeAt(i);

              //console.log(input[i], code);
              if(shift >= 1){
                let ceasar = code + shift;
                if( code >= 32 && code <= 47){
                  ceasar = code;
                }
                if(ceasar> 122 && code > 47){
                    let difference = 122 - code;
                    let adder = shift - difference;
                    ceasar = 96 + adder;
                }
                else if(ceasar < 97 && code > 47){
                    shift *= -1;
                    let difference = code - 97;
                    let subtractor = shift - difference;
                    ceasar = 123 - subtractor;
                }
                html += String.fromCharCode(ceasar); 
              }
              else if(shift < 0){
                //code = code
                let ceasar = code + shift;
                if( code >= 32 && code <= 47){
                  ceasar = code;
                }
                if(ceasar> 122 && code > 47){
                    let difference = 122 - code;
                    let adder = shift - difference;
                    ceasar = 96 + adder;
                }
                else if(ceasar < 97 && code > 47){
                    shift *= -1;
                    let difference = code - 97;
                    let subtractor = shift - difference;
                    ceasar = 123 - subtractor;
                    shift *= -1;
                }
                html += String.fromCharCode(ceasar); 
              }
          }    
        }
    }
    else{
        //console.log("DECODING")
        const lowerInput = input.toLowerCase();
        if(!shift || shift ===0){
            return false;
          }
          else if(shift > 25 || shift < -25){
            return false;
          }
          else{
            const lowerCase = input.toLowerCase();
            for(let i = 0; i < input.length; i++){
              let code = lowerCase.charCodeAt(i);
              if(shift >= 1){
                let ceasar = code - shift;
                if(code >= 32 && code <= 47){
                  ceasar = code;
                  }
                if(ceasar> 122 & code > 47){
                    let difference = 122 - code;
                    let adder = shift - difference;
                    ceasar = 96 + adder;
                  }
                else if(ceasar < 97 && code > 47){
                    let difference = code - 97;
                    let subtractor = shift - difference;
                    ceasar = 123 - subtractor;
                  }
                html += String.fromCharCode(ceasar);
              }
              else if(shift < 0){
                let ceasar = code - shift;
                if( code >= 32 && code <= 47){
                  ceasar = code;
                  }
                if(ceasar> 122 & code > 47){
                    let difference = 122 - code;
                    let adder = shift + difference;
                    ceasar = 96 - adder;
                  }
                else if(ceasar < 97 && code > 47){
                    let difference = code - 97;
                    let subtractor = shift - difference;
                    ceasar = 123 - subtractor;
                  }
                html += String.fromCharCode(ceasar);
              }
            }
          }     
    }
    return html;
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
