 var Translate = (function(oldTranslator) {
 
 var frenchLang ={"happy": "contento" ,   
 				"spring": "Primavera", 
 				"day": "dia" 
 				};
 
 oldTranslator.toSpanish = function(inputObject){
   
 	console.log(inputObject.textToTranslate,inputObject.languageToUse);
  	
  	var string = inputObject.textToTranslate;
	var frenchArray =[];
	var englishString = string.split(' ');
	console.log(englishString);

	for(i=0; i<englishString.length; i++){

		var spanWord=spanishLang[englishString[i]];
		console.log(spanWord);

		// if statement //	


		frenchArray.push(spanWord);

	}

  	return frenchArray.join(' ');

 
 }
 
 return oldTranslator;
 

})(Translate || {});