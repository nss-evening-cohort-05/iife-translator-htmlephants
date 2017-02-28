var Translate = (function() {

  // Private variable to store the user inputs
  
var inputs = {
  textToTranslate:"",
  languageToUse:""
}

  // Return the public interface that other code can interact with
  return {
    stringToTranslate: function(languageChoice, textInput) {
        
        inputs.textToTranslate = textInput.toLowerCase();
        inputs.languageToUse = languageChoice;
        console.log("translate "+inputs.textToTranslate,"to " +inputs.languageToUse);
        
    },

    getTranslation: function(){
      
      return inputs

    }

  };
})();