var translate = (function() {

  // Private variable to store the user inputs
  var textToTranslate;
  var output;
  var languageToUse;

  // Return the public interface that other code can interact with
  return {
    stringToTranslate: function() {
        
       	textToTranslate = toMain.textOutput;
        languageToUse = toMain.langOutput;
        console.log(textToTranslate,languageToUse);
    },

    getTranslation: function(language){
    	return textToInput
    }

  };
})();