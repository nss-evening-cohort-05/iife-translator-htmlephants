 var Translate = (function(oldTranslator) {
 
 var spanishLang ={"happy": "contento" ,   
 				"spring": "Primavera", 
 				"day": "dia" 
 				};
 
 oldTranslator.toSpanish = function(inputObject){
   
 	console.log(inputObject.textToTranslate,inputObject.languageToUse);
  	
  	var string = inputObject.textToTranslate;
	var spanishArray =[];
	var englishString = string.split(' ');
	console.log(englishString);

	for(i=0; i<englishString.length; i++){

		var spanWord=spanishLang[englishString[i]];
		console.log(spanWord);

		// if statement //	


		spanishArray.push(spanWord);

	}

  	return spanishArray.join(' ');

 
 }
 
 return oldTranslator;
 

})(Translate || {});