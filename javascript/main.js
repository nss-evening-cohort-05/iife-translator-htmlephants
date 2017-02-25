var translate = (function() {

  // Private variable to store the user inputs
  var textInput;
  var output;
  var language;

  // Return the public interface that other code can interact with
  return {
    stringToTranslate: function(translatorObject) {
        
       	textInput = translatorObject.textkey
        language  =	translatorObject.languagekey

    },

    getTranslation: function(language){
    	return output
    }

  };
})();