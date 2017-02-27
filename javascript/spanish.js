 var translate = (function(oldTranslator) {
 
 var spanishLang ={"happy": "contento" ,   
 				"spring": "Primavera", 
 				"day": "dia" 
 				};
 
 oldTranslator.toSpanish = function(inputObject){
   
 	console.log(inputObject.textToTranslate,inputObject.languageToUse);
  	
  	var spanishPhrase = [];

  	

  	// for(key in inputObject){

  	// 	spanishPhrase.push(key);
  	// 	console.log(spanishPhrase); 
  	// }
 
 }
 
 return;
 
})(Translate || {});